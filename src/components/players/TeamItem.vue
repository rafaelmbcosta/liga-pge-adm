<template>
  <article>
    <v-divider v-if="!first"> </v-divider>
    <v-list-tile>
      <v-list-tile-avatar>
        <v-img :src="imageError ? require('@/assets/fac.png') : team.url_escudo_png" @error="altImageError()"></v-img>
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

export default {
  data(){
    return{
      imageError: false
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    altImageError() {
      this.imageError = true
    }
  },
  props: ["team", "first", "edit"],
  watch: {
    'team.active': function(val) {
      this.$store.dispatch('util/loading')
      this.$store.dispatch('team/teamActivation', [this.team, val])
    }
  }
}
</script>
