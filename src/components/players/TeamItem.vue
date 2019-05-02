<template>
  <article>
    <v-list-tile>
    <v-list-tile-avatar>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title v-html="team.name"></v-list-tile-title>
    </v-list-tile-content>

    <v-list-tile-action>
    </v-list-tile-action>
  </v-list-tile>
    <v-divider v-if="!last"> </v-divider>
  </article>
</template>

<script>
export default {
  props: ["team", "last"]
}
</script>

