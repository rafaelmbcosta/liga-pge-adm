<template>
  <v-card>
    <v-toolbar light color="orange lighten-2">
      <v-toolbar-title class="text-xs-center">Times</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="showNewTeam">add_circle_outline</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list two-line subheader>
      <article v-for="(player, index) in getPlayers" :key="index">
        <TeamItem
          v-for="(team, i) in player.teams"
          :key = "i" 
          :team = "team"
          :player = "player"
          :first = "player === getPlayers[0] && player.teams[0] === team"
          avatar>
        </TeamItem>
      </article>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TeamItem from "./TeamItem"

export default {
  computed: {
    ...mapGetters(["getPlayers"])
  },
  methods: {
    ...mapActions(["showNewTeam"])
  }
  components: {
    TeamItem
  }
}
</script>
