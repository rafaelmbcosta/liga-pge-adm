<template>
  <v-card>
    <v-toolbar light color="orange lighten-2">
      <v-toolbar-title class="text-xs-center">Times</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="showTeamForm">add_circle_outline</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-list two-line subheader>
          <TeamItem
            v-for="(team, i) in getTeams"
            :key = "i" 
            :team = "team"
            :first = "i == 0"
            :edit = "true"
            avatar>
          </TeamItem>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import TeamItem from "./TeamItem"

export default {
  created() {
    this.$store.dispatch("team/loadTeams")
  },
  computed: {
    ...mapGetters('team', ["getTeams"])
  },
  methods: {
    showTeamForm(){
      this.$store.commit('team/TOGGLE_TEAM_FORM', true)
    }
  },
  components: {
    TeamItem
  }
}
</script>
