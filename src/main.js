import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLocalStorage from 'vue-localstorage'
import axios from './helpers/axios'
import store from './store'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'es6-promise/auto'
import vuetify from './plugins/vuetify'

Vue.filter('capitalize', function (value) {
  return value.toUpperCase()
})

new Vue({
  store,
  router,
  axios,
  localStorage,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(localStorage)
Vue.config.productionTip = false
Vue.use(VueLocalStorage)
