<template>
  <div class="season">
    <SeasonSettings/>
  </div>
</template>

<script>
// @ is an alias to /src
import SeasonSettings from '@/components/SeasonSettings.vue'

export default {
  name: 'season-settings',
  components: {
    SeasonSettings
  }
}
</script>
