<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-row justify="center" align="center">
        <v-col cols="12">
          <div class="title grey--text text--darken-2"> Rodada {{ progress.number }}: </div>
          <v-stepper :value="currentStep" elevation="0" flat>
            <v-stepper-header>
              <template v-for="(progressItem, index) in progress.progress">
                <v-stepper-step
                  :key="index"
                  :step="progressItem.step"
                  :complete="progressItem.value"
                  color="orange darken2"
                >
                  {{ progressItem.label }}
                </v-stepper-step>
                <v-divider v-if="index !== progress.progress.length - 1" :key="`divider_${index}`"></v-divider>
              </template>
            </v-stepper-header>
          </v-stepper>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['progress'],
  computed: {
    currentStep () {
      let progressMap = this.progress.progress.map((element) => {
        return element.value
      })
      let activeList = progressMap.filter((element) => {
        if (element === true) { return element }
      })
      return activeList.length
    }
  }
}
</script>
