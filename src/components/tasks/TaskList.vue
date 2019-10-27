<template>
  <v-row>
    <v-col cols="12">
      <div class="headline orange--text text--darken-3">ROTINAS</div>
      <v-row>
        <v-col
          cols="3"
          xs="12"
          sm="12"
          xl="3"
          lg="3"
          md="6"
          v-for="(task, index) in getTasks"
          :key="index"
        >
          <TaskItem
            :task="task"
          />
        </v-col>
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
