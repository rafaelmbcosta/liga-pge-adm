import Vue from 'vue'
import Vuex from 'vuex'
import service from 'api-client'

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
    },
    getMessages: state => {
      return state.messages
    }
  },
  mutations: {
    LOGIN(state, [ email, password ] ){
      state.messages = []
      service.serviceLogin(email, password)
      .then(response => {
        state.messages.push('Login realizado com Sucesso')
        localStorage.token = response.data.jwt
      })
      .catch(error => {
        state.messages.push('Login Inválido')
      })
    }
  }, 
  actions: {
    login({ commit }, loginData){
      console.log('A '+ loginData.email)
      commit('LOGIN', [ loginData.email, loginData.password] )
    }
  }
})

export default store;
