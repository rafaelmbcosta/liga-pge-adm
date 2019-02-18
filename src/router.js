import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Season from './views/Season.vue'
import SeasonSettings from './views/SeasonSettings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/seasons',
      name: 'seasons',
      component: Season
    },
    {
      path: '/season-settings',
      name: 'season-settings',
      component: SeasonSettings
    },
    {
      path: '/logout',
      name: 'logout',
      component: Login
    }
  ]
})
