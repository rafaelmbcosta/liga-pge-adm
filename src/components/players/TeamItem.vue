<template>
  <article>
    <!-- Icon with 2 lines and action -->
    <!-- Esquerda icone do time / Nome do time, nome do player / switch ativo/inativo -->
    <v-divider v-if="!first"> </v-divider>
    <v-list-tile>
      <v-list-tile-avatar>
        Escudo
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ team.name }}</v-list-tile-title>
        <v-list-tile-sub-title>Nome do cara</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        Switch
      </v-list-tile-action>
    </v-list-tile>
  </article>
</template>

<script>
export default {
  props: ["team", "first"]
}
</script>

