import customAxios from "@/auth/axios-auth"
import store from '../index'
import router from '@/router'
import originalApiService from '@/service/mock'

const state = {
  token: localStorage.getItem('token')
}

const getters = {
  getToken: state => { return state.token },
  isLoggedIn: state => { return !!state.token }
}

const mutations = {
  LOGIN_SUCCESS(state, token) {
    state.token = token
    localStorage.setItem('token', token)
    customAxios.defaults.headers.common["Authorization"] = `Bearer ${state.token}`
    store.commit('util/SEND_MESSAGE', ['success', 'Login efetuado com sucesso'])
    router.push('/')
  },

  LOGIN_FAILED(state, error) {
    store.commit('util/SEND_MESSAGE', ['error', error])
  }
}

const actions = {
  login({ commit }, loginData) {
    originalApiService.login(loginData.email, loginData.password)
    .then(response => {
      commit('LOGIN_SUCCESS', response.data.jwt)
    })
    .catch(error => {
      commit('LOGIN_FAILED', error)
    })
  },

  logout({ state }) {
    localStorage.removeItem('token')
    state.token = null
    customAxios.defaults.headers.common["Authorization"] = null
    store.commit('util/SEND_MESSAGE', ['success', 'logout realizado com sucesso'])
    router.push('/login')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
