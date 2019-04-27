<template>
  <v-app>
    <MessageList />
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
      {{ getMessages }}
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import MessageList from './components/messages/MessageList'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['getToken', 'getMessages'])
  },
  methods: {
    ...mapActions(['logout'])
  },
  components: {
    MessageList
  }
}
</script>
