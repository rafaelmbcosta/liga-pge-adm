<template>
  <article>
    <v-divider v-if="!first"> </v-divider>
    <v-list-tile>
      <v-list-tile-avatar>
        <v-img :src="team.url_escudo_png"></v-img>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ team.name }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ player.name }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-switch 
          v-model="team.active"
          color="orange darken-1"
        > 
        </v-switch>
      </v-list-tile-action>
    </v-list-tile>
  </article>
</template>

<script>
export default {
  props: ["team", "first", "player"]
}
</script>

