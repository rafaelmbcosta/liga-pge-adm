import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import { UserService, AuthenticationError } from '../services/user.service'
import { TokenService } from '../services/storage.service'
import ApiService from '../services/api.service'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    url: '',
    loading: false,
    messages: [],
    teams: [],
    showTeamForm: false,
    snackBar: {
      show: false,
      color: '',
      text: ''
    },
    authenticating: false,
    accessToken: TokenService.getToken(),
    authenticationErrorCode: 0,
    authenticationError: ''
  },
  getters: {
    getTeamForm: state => { return state.showTeamForm },
    getTeams: state => { return state.teams }
  },
  mutations: {
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
      ApiService.getTeams()
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
    },
    LOGIN_REQUEST(state) {
        state.authenticating = true;
        state.authenticationError = ''
        state.authenticationErrorCode = 0
    },

    LOGIN_SUCCESS(state, accessToken) {
      store.commit('SEND_MESSAGE', ['success', 'Login realizado com sucesso'])
      state.accessToken = accessToken
      state.authenticating = false;
    },

    LOGIN_ERROR(state, {errorCode, errorMessage}) {
        state.authenticating = false
        state.authenticationErrorCode = errorCode
        state.authenticationError = errorMessage
        store.commit('SEND_MESSAGE', ['error', 'Erro ao fazer login: '+errorMessage])
    },

    LOGOUT_SUCCESS(state) {
      store.commit('SEND_MESSAGE', ['success', 'Logout realizado com sucesso'])
      state.accessToken = ''
    }
  },
  actions: {
    async login({ commit }, loginData) {
        commit('LOGIN_REQUEST');

        try {
            const token = await UserService.login(loginData.email, loginData.password);
            commit('LOGIN_SUCCESS', token)

            // Redirect the user to the page he first tried to visit or to the home view
            router.push(router.history.current.query.redirect || '/');

            return true
        } catch (e) {
            if (e instanceof AuthenticationError) {
                commit('LOGIN_ERROR', {errorCode: e.errorCode, errorMessage: e.message})
            }

            return false
        }
    },
    logout({ commit }) {
      UserService.logout()
      commit('LOGOUT_SUCCESS')
      router.push('/login')
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
