import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Players.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'players',
      component: Main,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      // meta: {
      //   public: true,  // Allow access to even if not logged in
      //   onlyWhenLoggedOut: true
      // }
    }
  ]
})

export default router
