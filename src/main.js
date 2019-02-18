import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueLocalStorage from 'vue-localstorage'
import axios from './helpers/axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(VueLocalStorage)

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
