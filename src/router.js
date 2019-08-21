import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Players.vue'
import store from './store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'players',
      component: Main,
      beforeEnter (_to, _from, next){
        if (store.getters['auth/isLoggedIn']){
          next()
        } else {
          next('/login')
        }
      }
    },
    { // This is ugly, gotta find a better way
      path: '/',
      name: 'tasks',
      component: Tasks,
      beforeEnter (_to, _from, next){
        if (store.getters['auth/isLoggedIn']){
          next()
        } else {
          next('/login')
        }
      }
    }
  ]
})

export default router
