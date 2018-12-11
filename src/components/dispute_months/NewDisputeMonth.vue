<template lang="html">
  <div class="col-4">
    {{ nome }}
    <div class="card">
      <div class="card-header alert-success">Novo mês de disputa </div>
      <div class="card-body">
        <form class="form-inline">
          <div class="form-group">
            <label class="form-inline">Nome:&nbsp;</label>
            <input type="text" class="form-control" v-model="nome"/>&nbsp;
            <button type="submit" name="button" class="btn btn-success"> adicionar </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nome: null
    }
  }
}
</script>

<style lang="css">
</style>
