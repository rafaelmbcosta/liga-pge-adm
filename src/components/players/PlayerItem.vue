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
         <v-btn small color="orange lighten-2" 
                :disabled="isLoading"
                @click="changeStatus()">
                  {{ playerClass.btnText }}
         </v-btn>
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
          icon: 'check_circle_outline',
          iconColor: 'teal lighten-1',
          btnText: 'DESATIVAR',
          btnColor: 'red lighten-2'
        },
        disabled: {
          icon: 'block',
          iconColor: 'red lighten-2',
          btnText: 'ATIVAR',
          btnColor: 'teal lighten-1'
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
