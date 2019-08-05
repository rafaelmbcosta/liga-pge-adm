const state = {
  loading: false,
  snackBar: {
    show: false,
    color: '',
    text: ''
  }
}

const mutations = {
  SEND_MESSAGE(state, [type, text] ) {
    let color = ''
    if (type === 'error') { color = 'red lighten-1' }
    if (type === 'success') { color = 'teal lighten-1' }
    state.snackBar = { color: color, text: text, show: true }
  }
}

const actions = {
  sendMessage( { commit }, messageArray ) {
    commit('SEND_MESSAGE', messageArray)
  },
  closeSnack({ state }) {
    state.snackBar.show = false
  },
  hideNewTeam({ commit }) {
    commit('TOGGLE_TEAM_FORM', false)
  },
  loading({ state }, value) {
    state.loading = value
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
