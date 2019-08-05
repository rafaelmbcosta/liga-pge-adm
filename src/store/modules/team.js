import customAxios from '@/auth/axios-auth'
import service from '@/service/index'
import originalApiService from '@/service/originalApiService'
import mockService from '@/service/mock'
import store from '../index'

const state = {
  teams: [],
  showTeamForm: false,
  searchTeams: []
}

const getters = {
  getTeamForm: state => { return state.showTeamForm },
  getTeams: state => { return state.teams }
}

const mutations = {
  ADD_TEAM(state, team) {
    console.log('TEAM: '+team)
    service.addTeam(team)
    .then(_response => {
      store.commit('util/SEND_MESSAGE', ['success', 'Time criado com sucesso'])
      store.dispatch('team/loadTeams')
    })
    .catch(error => {
      store.commit('util/SEND_MESSAGE', ['error', 'Erro ao criar jogador '+error])
    })
    state.loading = false
  },
  TOGGLE_TEAM_FORM(state, show) {
    state.showTeamForm = show
  },

  GET_ORIGINAL_TEAMS(state, value) {
    originalApiService.getAPITeams(value)
      .then(response => {
        state.searchTeams = response.data
      })
      .catch(error => {
        store.commit('util/SEND_MESSAGE', ['error', error])
    })
  },

  TEAM_ACTIVATION(state, [team, value]) {
    service.teamActivation(team, value)
    .then(_response => {
      store.commit('util/SEND_MESSAGE', ['success', 'Time ativado/desativado com sucesso'])
      store.dispatch('team/loadTeams')
    })
    .catch(_error => {
     store.commit('util/SEND_MESSAGE', ['error', 'Erro ao ativar/desativar time'])
    })
    console.log('pos then catch')
    // util.state.loading = false
  },
}

const actions = {
  loadTeams({ commit }) {
    state.teams = []
    service.getTeams()
    .then(response =>  {
      state.teams = response.data
    })
    .catch(error => {
      store.commit('util/SEND_MESSAGE', ['error', error])
    })
  },
  addTeam({ commit }, team){
    commit('ADD_TEAM', team)
  },
  teamActivation({ commit }, [team, value]){
    store.dispatch('util/loading', true)
    commit('TEAM_ACTIVATION', [team, value])
    store.dispatch('util/loading', false)
  },
  getAPITeams({ commit }, value) {
    commit('GET_ORIGINAL_TEAMS', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
