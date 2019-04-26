<template lang="html">
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
                    v-model="loginData.email"
                    label="Login"
                    type="text"
                    color="orange darken-2">
                  </v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    v-model="loginData.password"
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
export default {
  data: function () {
    return {
      loginData: {
        email: null,
        password: null
      },
      drawer: null
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.loginData)
    }
  },
  props: {
    source: String
  }
}
</script>

<style lang="css">
</style>
