<template>
  <v-card>
    <v-toolbar light color="orange lighten-2">
      <v-toolbar-title class="text-xs-center" >Novo Time</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation>
       <v-select
          :items="players"
          item-text="name"
          item-value="id"
          color="orange darken-1"
          label="Selecione o Jogador"
        ></v-select>

        {{ selectedTeam }}
        <v-autocomplete
          v-model="selectedTeam"
          :loading="loading"
          :items="teams"
          :search-input.sync="autoCompleteInput"
          cache-items
          hide-details
          flat
          item-text="nome"
          item-value="slug"
          color="orange darken-1"
          label="Buscar Time"
        >
          <template v-slot:item="data">
            <template v-if="typeof data.item !== 'object'">
              {{ data.item.nome }}
            </template>
            <template v-else>
              <v-list-tile-avatar>
                <img :src="data.item.url_escudo_png">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="data.item.nome"></v-list-tile-title>
                <v-list-tile-sub-title v-html="data.item.nome_cartola"></v-list-tile-sub-title>
              </v-list-tile-content>
            </template>
          </template>
        </v-autocomplete>
        <br/>
        <v-btn dark
          :disabled="!valid"
          color="teal lighten-1"
          @click="validate"
        >
          Salvar
        </v-btn>

        <v-btn dark
          color="red accent-2"
          @click="reset"
        >
          Limpar Campos
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      autoCompleteInput: '',
      selectedTeam: null,
      teams: [],
      valid: false,
      loading: false
    }
  },
  watch: {
    autoCompleteInput (val) {
      val && val !== this.selectedTeam && this.getTeams(val)
    }
  },
  methods: {
    queryName(val){
      return "name"
    },
    getTeams(val){
      this.loading = true
      axios.get('times?q='+val)
           .then(response => {
             this.teams = response.data
           })
           .catch(error => {
            
          })
      this.loading = false
    }
  },
  props: ['players']
}
</script>

