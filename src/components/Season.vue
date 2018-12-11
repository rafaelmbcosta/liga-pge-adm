<template lang="html">
  <div class="text-center">
    <div>
      <p v-if="loading"> Buscando informações... </p>
      <p v-if="!seasons">  Nenhuma temporada  </p>
      <p v-if="error"> Erro ao conectar ao servidor  </p>
    </div>
    <div v-for="season in seasons"
         class="card col-4 offset-4"
         v-bind:class="{ 'alert-success': !season.finished, 'alert-secondary': season.finished }"
         style="margin-top: 2px;">
      <div class="card-body">
        <h4 class="card-title">Temporada {{ season.year }}</h4>
        <template v-if="!season.finished">
          <p class="card-text" > Em andamento </p>
          <a href="#" class="btn btn-success card-link">Editar</a>
        </template>
        <template v-if="season.finished">
          <p class="card-text"> Esta temporada já terminou</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      loading: true,
      error: false,
      seasons: [],
      url: 'http://localhost:3000/api/v1/seasons'
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
        this.seasons = response.data
        this.loading = false
        this.error = false
      })
      .catch(error => {
        console.log(error)
        this.error = true
        this.loading = false
      })
  }
}
</script>

<style lang="css">
</style>
