<template>
  <v-card height="100%">
    <v-card-text class="teste">
      <h3>
        {{ task.title | capitalize }}
      </h3>
      <br/>
      <v-divider horizontal></v-divider>
      <br/>
      <div>
        <v-list v-for="(description, index) in task.description"
                :key="index">
          {{ index + 1}}) {{ description }}
        </v-list>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        width="100%"
        :dark="!task.loading"
        :disabled="task.loading"
        color="orange darken-1"
        @click="runTask(task)"
      >
        {{ buttonText }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('tasks', ['runTask'])
  },
  computed: {
    buttonText () {
      return this.task.loading ? 'AGUARDE' : 'EXECUTAR'
    }
  },
  props: ['task']
}
</script>

<style scoped>
  .teste{
    height: 300px !important;
  }
</style>
