<template>
  <v-app>
    <v-snackbar
      v-if="snackBar.show"
      v-model="snackBar"
      :color="snackBar.color"
      :timeout="6000"
      :vertical='true'
      :top="true"
    >
      {{ snackBar.text }}
      <v-btn
        dark
        flat
        @click="closeSnack"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Administrador </span>
        <span class="font-weight-light orange--text">LIGA PGE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>Login</v-btn>
        <v-btn to="/players" flat>Jogadores</v-btn>
        <v-btn to="/about" flat>Sobre</v-btn>
        <v-btn @click="logout" to="/logout" flat>Logout</v-btn>
      </v-toolbar-items>
      
    </v-toolbar>
    <v-content>
      <v-spacer></v-spacer>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>

import { mapGetters, mapActions, mapState } from 'vuex'
import MessageList from './components/messages/MessageList'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['getToken']),
    ...mapState(['snackBar'])
  },
  methods: {
    ...mapActions(['logout', 'closeSnack'])
  },
  data() {
    return {
    }
  }

}
</script>
