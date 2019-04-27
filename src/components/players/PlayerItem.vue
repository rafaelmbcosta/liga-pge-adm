<template>
  <article>
      <v-list-tile>
      <v-list-tile-avatar>
        <img src="https://cdn.vuetifyjs.com/images/lists/5.jpg">
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title v-html="player.name"></v-list-tile-title>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-icon :color="'teal'">chat_bubble</v-icon>
      </v-list-tile-action>
    </v-list-tile>
     <v-divider v-if="!last"> </v-divider>
  </article>
</template>

<script>
export default {
  props: ['player', 'last']
}
</script>