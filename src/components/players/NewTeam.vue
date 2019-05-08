<template>
  <v-card>
    <v-toolbar light color="orange lighten-2">
      <v-toolbar-title class="text-xs-center" >Novo Time</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      Asynchronous autocomplete
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation>
       <v-select
          :items="players"
          item-text="name"
          item-value="id"
          label="Selecione o Jogador"
        ></v-select>

        {{ selectedTeam }}
        {{ autoCompleteInput }}
        <v-autocomplete
          v-model="selectedTeam"
          :items="teams"
          :search-input.sync="autoCompleteInput"
          cache-items
          flat
          hide-no-data
          hide-details
          label="Buscar Time"
        ></v-autocomplete>
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
      valid: false
    }
  },
  watch: {
    autoCompleteInput (val) {
      val && val !== this.selectedTeam && this.getTeams(val)
    }
  },
  methods: {
    getTeams(val){
      //https://medium.com/js-dojo/how-to-deal-with-cors-error-on-vue-cli-3-d78c024ce8d3
      axios.get('http://api.cartolafc.globo.com/times?q='+val)
           .then(response => {
             this.teams = response.data
           })
           .catch(error => {
             
           })
      this.autoCompleteInput = val
    }
  },
  props: ['players']
}
</script>

