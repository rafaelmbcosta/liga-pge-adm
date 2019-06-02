<template>
  <v-card>
    <v-toolbar light color="orange lighten-2">
      <v-toolbar-title class="text-xs-center" >Novo Time</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="hideNewTeam">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation>

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
          @click="addTeam"
        >
          Salvar
        </v-btn>

        <v-btn dark
          color="orange darken-1"
          @click="erro"
        >
          Limpar Campos
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

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
      val && val !== this.selectedTeam && this.getAPITeams(val)
    }
  },
  methods: {
    ...mapActions([
      'hideNewTeam'
    ]),
    addTeam(){
      // Segue action
    },
    erro(){
      this.$store.dispatch('sendMessage', ['error', 'Deu ruim'])
    },
    queryName(val){
      return "name"
    },
    getAPITeams(val){
      this.loading = true
      let server = process.env.VUE_APP_OFFICIAL_API_ADDRESS
      axios.get(server+'times?q='+val)
           .then(response => {
             this.teams = response.data
           })
           .catch(error => {
            this.$store.dispatch('sendMessage', ['error', error])
          })
      this.loading = false
    }
  },
}
</script>

