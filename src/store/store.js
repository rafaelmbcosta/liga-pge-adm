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
    players: [],
    playerForm: false,
    playerFormEdit: false,
    player: {
      id: null,
      name: '',
      active: false
    },
    playerFormTitle: 'Novo Jogador'
  },
  getters: {
    getToken: state => { return state.token },
    getMessages: state => { return state.messages },
    isLoggedIn: state => { return !!state.token },
    getPlayers: state => { return state.players },
    getPlayerForm: state => { return state.playerForm },
    getPlayerFormEdit: state => { return state.playerFormEdit },
    getPlayerEdit: state => { return state.getPlayerEdit },
    getPlayerFormTitle: state => { return state.playerFormTitle}
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
      state.messages = state.messages.filter(function(item){
        return message !== item
      })
    },
    SEND_MESSAGE(state, [type, text] ) {
      state.messages.push({ type: type, text: text })
    },
    GET_PLAYERS(state) {
      state.players = []
      service.getPlayers()
      .then(response =>  {
        state.players = response.data
      })
      .catch(error => {
        store.commit('SEND_MESSAGE', ['error', 'Erro ao acessar os Jogadores'])
      })
    },
    EDIT_PLAYER(state, player){
      store.commit('TOGGLE_PLAYER_FORM', true, false)
      state.player = player
      state.playerFormTitle = 'Editar Jogador'
    },
    ADD_PLAYER(state, player) {
      service.addPlayer(player)
      .then(response => {
        store.commit('SEND_MESSAGE', ['success', 'Jogador criado com sucesso'])
        store.commit('GET_PLAYERS')
      })
      .catch(error => {
        store.commit('SEND_MESSAGE', ['error', 'Erro ao criar jogador '+error])
      })
    },
    RESET_PLAYER(state) {
      state.player = {
        id: null,
        name: '',
        active: false
      },
      state.playerFormTitle = 'Novo Jogador'
    },
    TOGGLE_PLAYER_FORM(state, show, newPlayer) {
      if (newPlayer) { state.commit('RESET_PLAYER') }
      state.playerForm = show
    },
    UPDATE_PLAYER_NAME(state, name) {
      state.player.name = name
    },
    UPDATE_PLAYER_ACTIVE(state, active) {
      state.player.active = active
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
    },
    getPlayers({ commit }) {
      commit('GET_PLAYERS')
    },
    addPlayer( { commit }, player){
      commit('ADD_PLAYER', player)
    }, 
    showPlayerForm({ commit }, newPlayer){
      commit('TOGGLE_PLAYER_FORM', true, true)
    },
    hidePlayerForm({ commit }){
      commit('TOGGLE_PLAYER_FORM', false, false)
    },
    editPlayer({ commit }, player) {
      commit('EDIT_PLAYER', player)
    }
  }
})

export default store;
