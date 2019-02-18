<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Administrador </span>
        <span class="font-weight-light">LIGA PGE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>Login</v-btn>
        <v-btn to="/seasons" flat>Seasons</v-btn>
        <v-btn to="/season-settings" flat>Stuff</v-btn>
        <v-btn to="/about" flat>About</v-btn>
        <v-btn @click="logout()" to="/logout" flat>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      Token: {{ token }}
      <v-spacer></v-spacer>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      token: null
    }
  },
  created: function () {
    this.token = this.$localStorage.get('token')
  },
  methods: {
    logout () {
      this.$localStorage.set('token', null)
    }
  }
}
</script>
