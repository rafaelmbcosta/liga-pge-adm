<template>
  <v-layout row>
    <v-flex sm12>
      <v-layout row justify-center>
        <v-flex sm5>
          <PlayerList />
        </v-flex>
        <v-flex sm5 offset-sm1>
         <TeamList />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>

import PlayerList from './PlayerList'
import TeamList from './TeamList'

export default {
  components: {
    PlayerList,
    TeamList
  }
}
</script>

