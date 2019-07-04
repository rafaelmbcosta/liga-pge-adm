import axios from "axios";
import util from './util'

const state = {
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
  authenticationErrorCode: 0,
  authenticationError: ''
}

const getters = {
  getTeamForm: state => { return state.showTeamForm },
  getTeams: state => { return state.teams }
}

const mutations = {
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
  login({ commit }, loginData) {
    axios.post(process.env.VUE_APP_LOGIN_ADDRESS, { data: { email: loginData.email, password: loginData.password } })
        //  .then(response => console.log(response))
        //  .catch(error => console.log(error))
  },
  // async login({ commit }, loginData) {
  //     commit('LOGIN_REQUEST');

  //     try {
  //         const token = await UserService.login(loginData.email, loginData.password);
  //         commit('LOGIN_SUCCESS', token)

  //         // Redirect the user to the page he first tried to visit or to the home view
  //         router.push(router.history.current.query.redirect || '/');

  //         return true
  //     } catch (e) {
  //         if (e instanceof AuthenticationError) {
  //             commit('LOGIN_ERROR', {errorCode: e.errorCode, errorMessage: e.message})
  //         }

  //         return false
  //     }
  // },
  logout() {
    util.commit('SEND_MESSAGE', ['success', 'Time ativado/desativado com sucesso'])
    // commit('LOGOUT_SUCCESS')
    // router.push('/login')
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

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
