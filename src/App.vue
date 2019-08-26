<template>
  <v-app>
    <v-snackbar
      v-if="snackBar.show"
      v-model="snackBar"
      :color="snackBar.color"
      :timeout="6000"
      :vertical='true'
      :bottom="true"
      :left="true"
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

    <v-progress-circular
      class="progress"
      :size="100"
      indeterminate
      color="teal darken-1"
      v-if="loading"
    ></v-progress-circular>

    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Administrador </span>
        <span class="font-weight-light orange--text">LIGA PGE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-sm-and-down"
        v-if="isLoggedIn">
        <v-btn to="/" text>Jogadores</v-btn>
        <v-btn to="/tasks" text>Rotinas</v-btn>

        <v-btn
          @click="logout"
          to="/logout"
          v-if="isLoggedIn"
          icon
        >
          <v-icon>
            logout
          </v-icon>

        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <v-spacer></v-spacer>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState('util', ['snackBar', 'loading']),
    ...mapGetters('auth', ['isLoggedIn'])
  },
  methods: {
    ...mapActions('auth', ['logout']),
    ...mapActions('util', ['closeSnack'])
  },
  data() {
    return {
    }
  }
}
</script>
