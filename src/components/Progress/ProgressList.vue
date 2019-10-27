<template>
  <v-row>
    <v-col cols="12">
      <v-row align="space-between">
        <v-col>
          <div class="headline orange--text text--darken-3">PROGRESSO DAS RODADAS</div>
        </v-col>
        <v-col cols="1" align="end">
          <v-btn
            float="right"
            fab
            small
            color="orange"
            dark
            :loading="loading"
            @click="getRounds"
          >
            <v-icon>refresh</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <ProgressItem
        v-for="(round, index) in rounds"
        :key="index"
        :progress="round"
      />
    </v-col>
  </v-row>
</template>

<script>
import service from '@/service/mock'
import ProgressItem from './ProgressItem'
export default {
  created () {
    this.getRounds()
  },
  data () {
    return {
      loading: false,
      rounds: []
    }
  },
  methods: {
    getRounds () {
      this.rounds = []
      this.loading = true
      service.getProgress()
        .then(response => {
          this.rounds = response.data.progress
        })
        .catch(error => {
          this.$store.commit('util/SEND_MESSAGE', ['error', 'Erro ao executar rotina ' + error])
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  components: {
    ProgressItem
  }
}
</script>
