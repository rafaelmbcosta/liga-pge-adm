<template>
  <article v-if="!!this.player">
    <v-divider v-if="!first"> </v-divider>
      <v-list-tile>
      <v-list-tile-avatar>
        <v-icon large :color="playerClass.iconColor">{{ playerClass.icon }}</v-icon>
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title v-html="player.name"></v-list-tile-title>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-icon :color="'orange darken-1'" @click="editPlayer(player)">create</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </article>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created() {
    if (!!this.player && this.player.active) { this.playerClass = this.class.active }
    if (!!this.player && !this.player.active) { this.playerClass = this.class.disabled }
  },
  data() {
    return{
      isLoading: false,
      playerClass: null,
      class: {
        active: {
          icon: 'check_circle',
          iconColor: 'teal lighten-1',
        },
        disabled: {
          icon: 'error',
          iconColor: 'red accent-2',
        }
      }
    }
  },
  methods: {
    ...mapActions(['editPlayer']),
    changeStatus() {
      this.isLoading = true
      this.playerClass.btnText = 'AGUARDE...'
    }
  },
  props: ['player', 'first']
}
</script>

<style scoped>

</style>
