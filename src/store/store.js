import Vue from 'vue'
import Vuex from 'vuex'
import service from 'api-client'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.token,
    url: '',
    messages: []
  },
  getters: {
    getToken: state => { return state.token },
    getMessages: state => { return state.messages }
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
        state.messages.push('Login Inválido '+error )
        localStorage.token = null
      })
    },
    LOGOUT(){
      localStorage.token = null
      delete axios.defaults.headers.common['Authorization']
    }
  }, 
  actions: {
    login({ commit }, loginData){
      commit('LOGIN', [ loginData.email, loginData.password] )
    },
    logout( { commit }) {
      commit('LOGOUT')
    }
  }
})

export default store;
