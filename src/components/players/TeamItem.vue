<template>
  <article>
    {{ team.id }}
    {{ team.active }}
    <v-divider v-if="!first"> </v-divider>
    <v-list-tile>
      <v-list-tile-avatar>
        <v-img :src="team.url_escudo_png"></v-img>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ team.name }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ team.player_name }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-switch 
          v-bind:disabled="loading"
          v-if = "edit"
          v-model="team.active"
          color="orange darken-1"
        > 
        </v-switch>
      </v-list-tile-action>
    </v-list-tile>
  </article>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import axios from 'axios'

export default {
  computed: {
    ...mapState(['loading'])
  },
  props: ["team", "first", "edit"],
  watch: {
    'team.active': function(val) {
      this.$store.dispatch('loading')
      this.$store.dispatch('teamActivation', [this.team, val])
    }
  }
}
</script>

