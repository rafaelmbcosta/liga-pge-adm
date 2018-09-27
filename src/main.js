import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLocalStorage from 'vue-localstorage'
import axios from './helpers/axios'

Vue.config.productionTip = false
Vue.use(VueLocalStorage)

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
