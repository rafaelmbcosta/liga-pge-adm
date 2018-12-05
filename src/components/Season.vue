<template lang="html">
  <div>
    {{ seasons }}
  </div>
</template>

<script>

export default {
  data() {
    return {
      seasons: []
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/v1/seasons')
      .then(response => (this.info = response))
  }
}

</script>

<style lang="css">
</style>
