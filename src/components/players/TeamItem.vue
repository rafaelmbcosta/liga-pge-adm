<template>
  <article>
    <v-divider v-if="!first"> </v-divider>
    <v-list-item>
      <v-list-item-avatar>
        <v-img 
          class="img-small"
          :src="imageError ? require('@/assets/fac.png') : team.url_escudo_png" 
          @error="altImageError()"
        ></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ team.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ team.player_name }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-switch
          v-bind:disabled="loading"
          v-if = "edit"
          v-model="team.active"
          color="orange darken-1"
        >
        </v-switch>
      </v-list-item-action>
    </v-list-item>
  </article>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data(){
    return{
      imageError: false
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    altImageError() {
      this.imageError = true
    }
  },
  props: ["team", "first", "edit"],
  watch: {
    'team.active': function(val) {
      this.$store.dispatch('util/loading')
      this.$store.dispatch('team/teamActivation', [this.team, val])
    }
  }
}
</script>

<style scoped>
  .img-small{
    max-width: 40px;
  }
</style>