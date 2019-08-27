<template>
  <v-row justify="center">
    <v-col cols="10" justify-self="center" >
      <v-row
        justify="center"
        align="top"
      >
        <TaskItem class="mx-4" v-for="(task, index) in getTasks" :task="task" :key="index" xs3/>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import TaskItem from './TaskItem'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('tasks', ['getTasks'])
  },
  components: { TaskItem }
}
</script>
