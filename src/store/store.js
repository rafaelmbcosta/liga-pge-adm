import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.token || null,
    url: '',
    messages: []
  },
  getters: {
    getToken: state => {
      return state.token
    }
  },
  mutations: {
    LOGIN(login, password){
      login(login, password)
    }
  }, 
  actions: {
    login({ commit }, login, password){
      commit('LOGIN', login, password)
    }
  }
})

export default store;
