<template>
  <article>
      <v-list-tile>
      <v-list-tile-avatar>
        <v-icon large :color="playerClass.iconColor">{{ playerClass.icon }}</v-icon>
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title v-html="player.name"></v-list-tile-title>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-icon :color="'orange darken-1'" @click="changeStatus()">create</v-icon>
      </v-list-tile-action>
      <v-list-tile-action>
        <v-icon :color="'red red accent-2'" @click="changeStatus()">close</v-icon>
      </v-list-tile-action>
    </v-list-tile>
     <v-divider v-if="!last"> </v-divider>
  </article>
</template>

<script>
export default {
  created() {
    if (this.player.active) { this.playerClass = this.class.active }
    if (!this.player.active) { this.playerClass = this.class.disabled }
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
    changeStatus() {
      this.isLoading = true
      this.playerClass.btnText = 'AGUARDE...'
    }
  },
  props: ['player', 'last']
}
</script>

<style scoped>

</style>
