import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Main from './components/players/Main.vue'
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
      component: Main,
      // meta: {
      //   requiresAuth: true
      // }
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
    } else {
      store.dispatch('sendMessage', ['error', 'Você não tem permissão para acessar esse conteúdo'])
      router.push({name: 'login'})
    }
  } else {
    next() 
  }
})