<template lang="html">
  <div class="col-4 offsettatus-4">
    {{ nome }}
    <div class="card">
      <div class="card-header alert-success">Novo mês de disputa </div>
      <div class="card-body">
        <form class="form-inline"
              @submit="checkForm"
              action="test2">
          <p v-if="errors.length">
            <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </p>
          <div class="form-group">
            <label class="form-inline">Nome:&nbsp;</label>
            <input type="text" class="form-control" v-model="nome"/>&nbsp;
            <input type="submit" name="button" class="btn btn-success" value="Enviar" />
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
      nome: null,
      errors: []
    }
  },
  methods: {
    test () {
      alert('iei!')
    },
    test2 () {
      alert('Opa, validação de action')
    },
    checkForm (e) {
      if (this.nome.length === 0 || this.nome === '') {
        this.errors.push('Nome é obrigatório')
      }

      if (!this.errors.length) {
        alert('retornando true')
        return true
      }

      e.preventDefault()
    }
  }
}
</script>

<style lang="css">

</style>
