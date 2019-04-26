<template lang="html">
  <div>
    <h4> Tem que fazer: </h4>
      <ol>
        <li>Cadastrar novo mês de disputa</li>
        <li>Editar / Remover DM</li>
      </ol>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    seasonId: Number,
    disputeMonths: Array
  }
}
</script>

<style lang="css">
</style>
