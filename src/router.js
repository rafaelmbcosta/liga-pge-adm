import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Players from './components/players/Players.vue'
import store from './store/store.js'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/players',
      name: 'players',
      component: Players,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Login
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  console.log(store.getters.isLoggedIn)
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})