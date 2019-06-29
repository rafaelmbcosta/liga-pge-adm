import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueLocalStorage from 'vue-localstorage'
import axios from './helpers/axios'
import Vuetify from 'vuetify'
import store from './store/store'
import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'es6-promise/auto'

new Vue({
  store,
  router,
  axios,
  localStorage,
  render: h => h(App)
}).$mount('#app')

Vue.use(localStorage)
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(VueLocalStorage)

ApiService.init(process.env.VUE_APP_ROOT_API)

// If token exists set header
if (TokenService.getToken()) {
  console.log('Main.js token:'+TokenService.getToken())
  ApiService.setHeader()
}
