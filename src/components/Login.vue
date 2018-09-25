<template lang="html">
  <div class="row justify-content-md-center justify-content-sm-center justify-content-lg-center">
    <div class="col-sm-8 col-md-6 col-lg-4">
      <div class="form-group">
        <label for="">Login</label>
        <input type="text" class="form-control" v-model="email"/>
      </div>
      <div class="from-group">
        <label for="">Senha</label>
        <input type="password" class="form-control" v-model="password"/>
      </div>
      <br/>
      <button type="button" name="button" class="btn btn-success" @click="login">Enviar</button>
      <button type="button" name="button" class="btn btn-info" @click="logout">Deslogar</button>
      <button type="button" name="button" class="btn btn-danger" @click="getToken">Token</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../main.js'
import VueLocalStorage from 'vue-localstorage'

export default {
  data: function() {
    return{
      email: null,
      password: null,
      errorMessage: ''
    }
  },
  methods: {
    login(){
      axios.post('http://localhost:3000/user_token', {
        auth: {
          email: this.email,
          password: this.password
        }
      })
      .then(response => {
        this.token = response.data.jwt;
        this.errorMessage = null;
        this.$localStorage.set('token', response.data.jwt);
      })
      .catch(error => {
        this.errorMessage = 'Erro ao recuperar token'
      })
    },
    logout(){
      this.$localStorage.set('token', null)
    },
    getToken(){
      console.log(this.$localStorage.get('token'));

    }
  }
}
</script>

<style lang="css">
</style>
