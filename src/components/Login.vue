<template lang="html">
  <!-- <div class="row justify-content-md-center justify-content-sm-center justify-content-lg-center">
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
  </div> -->
    <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="orange lighten-1">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field 
                    prepend-icon="person" 
                    name="login" 
                    v-model="email" 
                    label="Login" 
                    type="text" 
                    color="orange darken-2">
                  </v-text-field>
                  <v-text-field 
                    id="password" 
                    prepend-icon="lock" 
                    v-model="password" 
                    name="password" 
                    label="Password" 
                    type="password" color="orange darken-2">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange lighten-1" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      email: null,
      password: null,
      errorMessage: '',
      drawer: null
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:3000/user_token', {
        auth: {
          email: this.email,
          password: this.password
        }
      })
        .then(response => {
          this.token = response.data.jwt
          this.errorMessage = null
          this.$localStorage.set('token', response.data.jwt)
        })
        .catch(error => {
          this.errorMessage = 'Erro ao recuperar token ' + error
        })
    },
    getToken () {
      console.log(this.$localStorage.get('token'))
    }
  },
  props: {
    source: String
  }
}
</script>

<style lang="css">
</style>
