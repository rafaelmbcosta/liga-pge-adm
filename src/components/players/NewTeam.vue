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
        <v-autocomplete
          v-model="selectedTeam"
          :loading="loading"
          :items="searchTeams"
          :search-input.sync="autoCompleteInput"
          cache-items
          :rules="autocompleteRules"
          hide-no-data
          item-text="nome"
          color="orange darken-1"
          label="Buscar Time"
          return-object
        >
          <template v-slot:selection="data">
            <v-chip
              :selected="data.selected"
              class="chip--select-multi"
            >
              <v-avatar>
                <img :src="data.item.url_escudo_png" >
              </v-avatar>
              {{ data.item.nome }} ({{ data.item.nome_cartola }})
            </v-chip>
          </template>
          <template v-slot:item="data" >
            <template v-if="typeof data.item !== 'object'">
              {{ data.item.nome }}
            </template>
            <template v-else>
              <TeamItem 
                :team="{ name: data.item.nome,
                        player_name: data.item.nome_cartola,
                        url_escudo_png: data.item.url_escudo_png,
                        active: false }"
                :first="true"
                :edit="false"
              >
              </TeamItem>
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
          color="orange darken-1"
          @click="cleanFields"
        >
          Limpar Campos
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
import TeamItem from './TeamItem'

export default {
  data(){
    return {
      autoCompleteInput: '',
      selectedTeam: null,
      autocompleteRules: [
        v => !!v || 'Time é necessário'
      ],
      valid: false,
      loading: false
    }
  },
  watch: {
    autoCompleteInput (val) {
      val && val !== this.selectedTeam && this.getAPITeams(val)
    }
  },
  computed: {
    ...mapState('team', ['searchTeams'])
  },
  methods: {
    ...mapActions('team', ['hideNewTeam']),
    validate(){
      if (this.$refs.form.validate()) {
        console.log('partiu validate: '+this.selectedTeam.nome)
        this.$store.dispatch('team/addTeam', this.selectedTeam)
      }
    },
    cleanFields(){
      this.autoCompleteInput = null
      this.selectedTeam = null
    },
    queryName(val){
      return "name"
    },
    getAPITeams(val){
      this.loading = true
      this.$store.dispatch('team/getAPITeams', this.selectedTeam)
      this.loading = false
    }
  },
  components: {
    TeamItem
  }
}
</script>

