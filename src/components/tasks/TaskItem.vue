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
          fluid 
          width="100%"
          v-bind:disabled="loading"
          color="orange lighten-1"
          @click="loading = true"
        >
          {{ loading ? 'AGUARDE' : 'EXECUTAR' }}
        </v-btn> 
      </v-card-actions>
    </v-card>
</template>

<script>

export default {
  data(){
    return{
      loading: false
    }
  },
  methods: {
    
  },
  props: ['task']
}
</script>

<style>
  .task-text{
    height: 180px;
  }
</style>
