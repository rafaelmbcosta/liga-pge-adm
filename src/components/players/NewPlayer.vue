<template>
  <v-card>
    <v-toolbar light color="orange lighten-2">
      <v-toolbar-title class="text-xs-center" >{{ playerFormTitle }}</v-toolbar-title>
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
            v-model="name"
            :rules="nameRules"
            color="orange darken-1"
            label="Nome"
            required
          >
          </v-text-field>

          <v-switch
            v-model="active"
            label="Ativo"
            color="orange darken-1"
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
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      valid: true,
      nameRules: [name => !!name || 'Nome é obrigatório'],
    }
  },
  computed: {
    ...mapState(['playerFormTitle']),
    name: {
      get(){
        return this.$store.state.player.name
      },
      set(value){
        this.$store.commit('UPDATE_PLAYER_NAME', value)
      }
    },
    active: {
       get(){
        return this.$store.state.player.active
      },
      set(value){
        this.$store.commit('UPDATE_PLAYER_ACTIVE', value)
      }
    },
    formTitle(){
      // if (this.getPlayerFormEdit) { return `Editar ${this.getPlayerEdit.name }` }
      // if (!this.getPlayerFormEdit) { return 'Novo Jogador'}
    },
  },
  methods: {
    ...mapActions(["hidePlayerForm"]),
    validate () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('addPlayer')
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>