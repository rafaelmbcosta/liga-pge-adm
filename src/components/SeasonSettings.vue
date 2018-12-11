<template lang="html">
  <div>
    Token: {{ getToken() }}<br/>
    Season: {{ season }}
    <div>
      <p v-if="loading"> Buscando informações... </p>
      <p v-if="!season">  Temporada não encontrada </p>
      <p v-if="error"> Erro ao conectar ao servidor  </p>
    </div>
    <h3> Dispute Month List </h3>
    <DisputeMonthList :seasonId="season.id" :disputeMonths="season.dispute_months"/>
    <h3> Novo Mês </h3>
    <NewDisputeMonth/>
    <h4> Plano </h4>
    <div>
      linhazinha antes para arrastar e mudar a ordem.
      Componente 1: Listagem dos meses de disputa ( com botões de Editar e Apagar )
      Quando editar aparece um botãozim Verde (Salvar) na propria linha
      BOTÃO NOVO em baixo que adiciona uma "linha"
    </div>
    <div>
      Painelzim Maroto para adicionar os dias de forma dinamica nos meses de disputa !
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import DisputeMonthList from '@/components/dispute_months/DisputeMonthList.vue'
import NewDisputeMonth from '@/components/dispute_months/NewDisputeMonth.vue'

export default {
  data () {
    return {
      season: null,
      url: 'http://localhost:3000/api/v1/seasons/4'
    }
  },
  methods: {
    getToken () {
      return this.$localStorage.get('token')
    }
  },
  mounted () {
    axios
      .get(this.url, { headers: { Authorization: `Bearer ${this.getToken()}` } })
      .then(response => {
        this.season = response.data
        this.loading = false
        this.error = false
      })
      .catch(error => {
        console.log(error)
        this.error = true
        this.loading = false
      })
  },
  components: {
    DisputeMonthList,
    NewDisputeMonth
  }
}
</script>

<style lang="css">

</style>
