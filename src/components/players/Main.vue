<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row justify-center>
      <v-flex sm10>
        <NewTeam v-if="getTeamForm"/>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex sm12>
        <v-spacer></v-spacer>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex sm10>
        <TeamList />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import TeamList from './TeamList'
import NewTeam from './NewTeam'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getTeamForm', 'getTeams'])
  },
  components: {
    TeamList,
    NewTeam
  }
}
</script>

<style scoped>

</style>


