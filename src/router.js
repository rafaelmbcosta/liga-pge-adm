import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Main from './components/players/Main.vue'
import { TokenService } from './services/storage.service'

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
      path: '/players',
      name: 'players',
      component: Main,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        public: true,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }
    }
  ]
})
 
export default router

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken();
  
  if (!isPublic && !loggedIn) {
    console.log('condition 1')
    console.log('is public: '+isPublic)
    console.log('is logged ind: '+loggedIn)
    console.log('is !logged ind: '+!loggedIn)

    return next({
      path:'/login',
      query: { redirect: to.fullPath }  // Store the full path to redirect the user to after login
    });
  }

  // Do not allow user to visit login page or register page if they are logged in
  console.log('condition 2')
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/players')
  }

  next();
})