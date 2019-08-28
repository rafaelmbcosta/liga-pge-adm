import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import util from './modules/util'
import team from './modules/team'
import tasks from './modules/tasks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    util,
    team,
    tasks
  }
})
