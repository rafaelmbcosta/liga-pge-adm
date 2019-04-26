import Vue from 'vue'
import Vuex from 'vuex'
import service from 'api-client'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    url: '',
    token: null,
    messages: []
  },
  getters: {
    getToken: state => { return state.token },
    getMessages: state => { return state.messages },
    isLoggedIn: state => { return !!state.token } 
  },
  mutations: {
    LOGIN(state, [ email, password ] ){
      state.messages = []
      service.serviceLogin(email, password)
      .then(response => {
        state.messages.push({ type: 'success', text: 'Login realizado com Sucesso' })
        state.token =  response.data.jwt
      })
      .catch(error => {
        state.messages.push({ type: 'error', text: 'Login Inválido '+ error })
        state.token = null
      })
    },
    LOGOUT( state ){
      state.messages = []
      state.token = null
      delete axios.defaults.headers.common['Authorization']
      state.messages.push({ type: 'success', text: 'Logout realizado com sucesso' })
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
