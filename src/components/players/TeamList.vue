<template>
  <v-card>
    <v-toolbar light color="orange lighten-2">
      <v-toolbar-title class="text-xs-center">Times</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="showTeamForm">add_circle_outline</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list two-line subheader>
        <TeamItem
          v-for="(team, i) in getTeams"
          :key = "i" 
          :team = "team"
          :player = "player"
          :first = "i == 0"
          avatar>
        </TeamItem>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import TeamItem from "./TeamItem"

export default {
  computed: {
    ...mapGetters(["getTeams"])
  },
  methods: {
    showTeamForm(){
      this.$store.commit('TOGGLE_TEAM_FORM', true)
    }
  },
  components: {
    TeamItem
  }
}
</script>
