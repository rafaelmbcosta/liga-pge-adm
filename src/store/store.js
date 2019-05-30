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
    messages: [],
    team: {
      id: null,
      name: '',
      player_name: '',
      url_escudo: ''
    },
    teams: [],
    showTeamForm: false
  },
  getters: {
    getToken: state => { return state.token },
    getMessages: state => { return state.messages },
    isLoggedIn: state => { return !!state.token },
    getTeamForm: state => { return state.showTeamForm },
    getTeams: state => { return state.teams }
  },
  mutations: {
    LOGIN(state, [ email, password ] ){
      state.messages = []
      service.serviceLogin(email, password)
      .then(response => {
        store.commit('SEND_MESSAGE', ['success', 'Login realizado com Sucesso'])
        state.token =  response.data.jwt
        router.push({ path: 'players' })
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
      state.messages = state.messages.filter(function(item){
        return message !== item
      })
    },
    SEND_MESSAGE(state, [type, text] ) {
      state.messages.push({ type: type, text: text })
    },
    GET_TEAMS(state) {
      state.teams = []
      service.getTeams()
      .then(response =>  {
        state.teams = response.data
      })
      .catch(error => {
        store.commit('SEND_MESSAGE', ['error', 'Erro ao acessar os times'])
      })
    },
    // ADD_TEAM(state) {
    //   service.addTeam(state.team)
    //   .then(response => {
    //     store.commit('SEND_MESSAGE', ['success', 'Time criado com sucesso'])
    //     store.commit('GET_PLAYERS')
    //     store.commit('RESET_PLAYER')
    //   })
    //   .catch(error => {
    //     store.commit('SEND_MESSAGE', ['error', 'Erro ao criar jogador '+error])
    //   })
    // },
    // RESET_PLAYER(state) {
    //   let newPlayer =  { 
    //     id: null,
    //     name: '',
    //     active: false
    //   }
    //   state.player = JSON.parse(JSON.stringify(newPlayer))
    //   state.playerFormTitle = 'Novo Jogador'
    // },
    // UPDATE_PLAYER_NAME(state, name) {
    //   state.player.name = name
    // },
    // UPDATE_PLAYER_ACTIVE(state, active) {
    //   state.player.active = active
    // },
    TOGGLE_TEAM_FORM(state, show) {
      state.showTeamForm = show
    }
  }, 
  actions: {
    login({ commit }, loginData){
      commit('LOGIN', [loginData.email, loginData.password] )
    },
    logout({ commit }) {
      commit('LOGOUT')
    },
    removeMessage( { commit }, message) {
      commit('REMOVE_MESSAGE', message)
    },
    sendMessage( { commit }, messageArray ) {
      commit('SEND_MESSAGE', messageArray)
    },
    loadTeams({ commit }) {
      commit('GET_TEAMS')
     }
  }
})

export default store;
