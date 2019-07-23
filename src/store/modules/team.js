import customAxios from '@/auth/axios-auth'
import service from '@/service/index'
import originalApiService from '@/service/originalApiService'
import mockService from '@/service/mock'
import util from './util'

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
  GET_TEAMS(state) {
    state.teams = []
    service.getTeams()
    .then(response =>  {
      state.teams = response.data
    })
    .catch(error => {
      util.commit('SEND_MESSAGE', ['error', error])
    })
  },
  ADD_TEAM(state, team) {
    // console.log('TEAM: '+team.nome)
    // service.addTeam(team)
    // .then(_response => {
    //   store.commit('SEND_MESSAGE', ['success', 'Time criado com sucesso'])
    //   store.commit('GET_TEAMS')
    // })
    // .catch(error => {
    //   store.commit('SEND_MESSAGE', ['error', 'Erro ao criar jogador '+error])
    // })
    // state.loading = false
  },
  TOGGLE_TEAM_FORM(state, show) {
    state.showTeamForm = show
  },

  GET_ORIGINAL_TEAMS(state, value) {
    mockService.getAPITeams(value)
      .then(response => {
        state.searchTeams = response.data
      })
      .catch(error => {
        util.commit('SEND_MESSAGE', ['error', error])
    })
  },

  TEAM_ACTIVATION(state, [team, value]) {
    service.teamActivation(team, value)
    .then(_response => {
      util.commit('SEND_MESSAGE', ['success', 'Time ativado/desativado com sucesso'])
      store.commit('GET_TEAMS')
    })
    .catch(_error => {
      util.commit('SEND_MESSAGE', ['error', 'Erro ao ativar/desativar time'])
    })
    util.state.loading = false
  },
}

const actions = {
  loadTeams({ commit }) {
    state.teams = []
    mockService.getTeams()
    .then(response =>  {
      state.teams = response.data
    })
    .catch(error => {
      util.commit('SEND_MESSAGE', ['error', error])
    })
  },
  addTeam({ commit }, team){
    commit('ADD_TEAM', team)
  },
  teamActivation({ commit }, [team, value]){
    commit('TEAM_ACTIVATION', [team, value])
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
