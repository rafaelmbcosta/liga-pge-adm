<template>
  <v-card>
    <v-toolbar light color="orange lighten-2">
      <v-toolbar-title class="text-xs-center" >Novo Time</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation>
      <v-select
        v-model="player"
        v-validate="'required'"
        :items="items"
        :error-messages="errors.collect('select')"
        label="Select"
        data-vv-name="select"
        required
      ></v-select>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      player: null
    }
  },
  methods: {
    ...mapActions(["hidePlayerForm"]),
    validate () {
      if (this.$refs.form.validate()) {
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>

