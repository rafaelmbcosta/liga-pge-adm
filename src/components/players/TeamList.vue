<template>
  <v-card>
    <v-toolbar light color="orange lighten-2">
      <v-toolbar-title class="text-xs-center">Times</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>add_circle_outline</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list two-line>
      <article v-for="(player, index) in getPlayers" :key="index">
        <PlayerItem
          v-for="(team, i) in player.teams"
          :key = "i" 
          :team = "team"
          :last = "player.teams.length == i + 1"
          avatar>
        </PlayerItem>
      </article>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import PlayerItem from "./PlayerItem"

export default {
  computed: {
    ...mapGetters(["getPlayers"])
  },
  components: {
    PlayerItem
  }
}
</script>
