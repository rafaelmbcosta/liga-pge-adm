import Vue from 'vue'
import Vuex from 'vuex'
import service from 'api-client'
import axios from 'axios'
import router from '../router'

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
        store.commit('SEND_MESSAGE', ['success', 'Login realizado com Sucesso'])
        state.token =  response.data.jwt
        router.push({path: 'players'})
      })
      .catch(error => {
        store.commit('SEND_MESSAGE', ['error', 'Login Inválido'])
        state.token = null
      })
    },
    LOGOUT( state ){
      state.messages = []
      state.token = null
      delete axios.defaults.headers.common['Authorization']
      store.commit('SEND_MESSAGE', ['success', 'Logout realizado com sucesso'])
    },
    REMOVE_MESSAGE( state, message ){
      state.messages = state.messages.filter(function(m){
        return message !== m 
      })
    },
    SEND_MESSAGE(state, [type, text] ) {
      state.messages.push({ type: type, text: text })
    }
  }, 
  actions: {
    login({ commit }, loginData){
      commit('LOGIN', [loginData.email, loginData.password] )
    },
    logout( { commit }) {
      commit('LOGOUT')
    },
    removeMessage( { commit }, message) {
      commit('REMOVE_MESSAGE', message)
    },
    sendMessage( { commit }, messageArray ) {
      commit('SEND_MESSAGE', messageArray)
    }
  }
})

export default store;
