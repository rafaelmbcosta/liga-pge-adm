<template>
  <div>
    <TaskList />
  </div>
</template>

<script>
import TaskList from '@/components/tasks/TaskList'
import Logs from '@/components/logs/Logs'

export default {
  components: { TaskList, Logs }
}
</script>
