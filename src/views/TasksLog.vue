<template>
  <div>
    <ProgressList />
    <v-divider> </v-divider>
    <TaskList />
  </div>
</template>

<script>
import TaskList from '@/components/tasks/TaskList'
import ProgressList from '@/components/Progress/ProgressList'

export default {
  components: { TaskList, ProgressList }
}
</script>
