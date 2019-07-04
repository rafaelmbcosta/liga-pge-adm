const state = {
  teams: [],
  showTeamForm: false,
}

const getters = {
  getTeamForm: state => { return state.showTeamForm },
  getTeams: state => { return state.teams }
}

const mutations = {
  GET_TEAMS(state) {
    // state.teams = []
    // ApiService.getTeams()
    // .then(response =>  {
    //   state.teams = response.data
    // })
    // .catch(error => {
    //   store.commit('SEND_MESSAGE', ['error', error])
    // })
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

  TEAM_ACTIVATION(state, [team, value]) {
    // service.teamActivation(team, value)
    // .then(_response => {
    //   store.commit('SEND_MESSAGE', ['success', 'Time ativado/desativado com sucesso'])
    //   store.commit('GET_TEAMS')
    // })
    // .catch(_error => {
    //   store.commit('SEND_MESSAGE', ['error', 'Erro ao ativar/desativar time'])
    // })
    // state.loading = false
  },
}

const actions = {
  loadTeams({ commit }) {
    commit('GET_TEAMS')
  },
  addTeam({ commit }, team){
    commit('ADD_TEAM', team)
  },
  teamActivation({ commit }, [team, value]){
    commit('TEAM_ACTIVATION', [team, value])
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
