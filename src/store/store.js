import Vue from 'vue'
import Vuex from 'vuex'
import service from 'api-client'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    url: '',
    loading: false,
    token: null,
    messages: [],
    teams: [],
    showTeamForm: false,
    snackBar: {
      show: false,
      color: '',
      text: ''
    }
  },
  getters: {
    getToken: state => { return state.token },
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
      .catch(_error => {
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
      let color = ''
      if (type === 'error') { color = 'red lighten-1' }
      if (type === 'success') { color = 'teal lighten-1' }
      state.snackBar = { color: color, text: text, show: true }
    },
    GET_TEAMS(state) {
      state.teams = []
      service.getTeams()
      .then(response =>  {
        state.teams = response.data
      })
      .catch(error => {
        store.commit('SEND_MESSAGE', ['error', error])
      })
    },
    ADD_TEAM(state, team) {
      console.log('TEAM: '+team.nome)
      service.addTeam(team)
      .then(_response => {
        store.commit('SEND_MESSAGE', ['success', 'Time criado com sucesso'])
        store.commit('GET_TEAMS')
      })
      .catch(error => {
        store.commit('SEND_MESSAGE', ['error', 'Erro ao criar jogador '+error])
      })
      state.loading = false
    },
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
    },

    TEAM_ACTIVATION(state, [team, value]) {
      service.teamActivation(team, value)
      .then(_response => {
        store.commit('SEND_MESSAGE', ['success', 'Time ativado/desativado com sucesso'])
        store.commit('GET_TEAMS')
      })
      .catch(_error => {
        store.commit('SEND_MESSAGE', ['error', 'Erro ao ativar/desativar time'])
      })
      state.loading = false
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
    },
    closeSnack({ state }) {
      state.snackBar.show = false
    },
    hideNewTeam({ commit }) {
      commit('TOGGLE_TEAM_FORM', false)
    },
    addTeam({ commit }, team){
      commit('ADD_TEAM', team)
    },
    loading({ state }) {
      state.loading = true
    },
    teamActivation({ commit }, [team, value]){
      commit('TEAM_ACTIVATION', [team, value])
    }
  }
})

export default store;
