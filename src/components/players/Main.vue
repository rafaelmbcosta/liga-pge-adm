<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row  justify-center>
      <v-flex sm10>
        <NewPlayer v-if="getPlayerForm" />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex sm12>
        <v-spacer></v-spacer>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex sm5>
        <PlayerList />
      </v-flex>
      <v-flex sm5>
        <TeamList />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import PlayerList from './PlayerList'
import TeamList from './TeamList'
import NewPlayer from './NewPlayer'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getPlayerForm'])
  },
  components: {
    PlayerList,
    TeamList,
    NewPlayer
  }
}
</script>

<style scoped>
  NewPlayer{
    margin-bottom: 40px;
  }
</style>


