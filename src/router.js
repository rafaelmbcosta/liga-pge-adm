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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
