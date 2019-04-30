<template>
  <v-card>
    <v-toolbar light color="orange lighten-2">
      <v-toolbar-title class="text-xs-center" >Novo Jogador</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="hidePlayerForm">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation>
          <v-text-field
            v-model="player.name"
            :rules="nameRules"
            color="orange darken-1"
            label="Nome"
            required
          >
          </v-text-field>

          <v-switch
              v-model="player.active"
              label="Ativo"
              color="orange darken-1"
              value="true"
              hide-details
            ></v-switch>

          <v-btn dark
            :disabled="!valid"
            color="teal lighten-1"
            @click="validate"
          >
            Salvar
          </v-btn>

          <v-btn dark
            color="red accent-2"
            @click="reset"
          >
            Limpar Campos
          </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      valid: true,
      nameRules: [name => !!name || 'Nome é obrigatório'],
      player: {
        id: null,
        name: '',
        active: false
      }
    }
  },
  methods: {
    ...mapActions(["hidePlayerForm"]),
    validate () {
      if (this.$refs.form.validate()) {
        let playerCopy = JSON.parse(JSON.stringify(this.player))
        this.$store.dispatch('addPlayer', playerCopy)
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>