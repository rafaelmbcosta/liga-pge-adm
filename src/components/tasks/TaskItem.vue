<template>
    <v-card  height="50px;">
      <v-card-text class="card-task">
        <h3 class="text--primary">
          {{ task.title | capitalize }}
        </h3>
        <br/>
        <v-divider horizontal></v-divider>
        <br/>
        <div class="task-text">
          <v-list v-for="(description, index) in task.description" 
                  :key="index">
            {{ index + 1}}) {{ description }}
          </v-list>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn 
          width="100%"
          dark
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
    buttonText() {
      return this.task.loading ? 'AGUARDE' : 'EXECUTAR'
    }
  },
  props: ['task']
}
</script>

<style>
  .task-text{
    height: 180px;
  }
</style>
