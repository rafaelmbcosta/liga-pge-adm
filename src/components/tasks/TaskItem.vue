<template>
  <v-card max-width="350">
    <v-card-text>
        <h3 class="text--primary">
          {{ task.title }}
        </h3>
        <v-list v-for="(description, index) in task.description" :key="index">
          {{ description }}
        </v-list>
        <v-card-actions>
          <v-btn>Executar</v-btn>
        </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['task']
}
</script>
