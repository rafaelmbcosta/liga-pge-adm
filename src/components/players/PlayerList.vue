<template>
  <v-card>
    <v-toolbar light color="orange lighten-2">
      <v-toolbar-title class="text-xs-center">Jogadores</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="showPlayerForm">
        <v-icon>add_circle_outline</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list two-line>
      <PlayerItem
        v-for="(player, i) in getPlayers"
        :key="i" 
        :player="player"
        :last = "getPlayers.length == i + 1"
        avatar>
      </PlayerItem>
    </v-list>
  </v-card>    
</template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'
  import PlayerItem from './PlayerItem'

  export default {
    created(){
      this.$store.dispatch('getPlayers')
    },
    computed: {
      ...mapGetters(['getPlayers'])
    },
    methods: {
      ...mapActions(['showPlayerForm'])
    },
    components: {
      PlayerItem
    }
  }
  </script>