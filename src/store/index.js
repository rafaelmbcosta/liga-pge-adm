import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/auth'
import util from './modules/util'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    util
  }
})
