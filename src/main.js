import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueLocalStorage from 'vue-localstorage'
import axios from './helpers/axios'
import Vuetify from 'vuetify'
import store from './store/store'
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