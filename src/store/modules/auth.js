import axios from "axios";
import customAxios from "@/auth/axios-auth"
import store from '../index'
import router from '@/router'

const state = {
  token: localStorage.getItem('token')
}

const getters = {
  getToken: state => { return state.token },
}

const mutations = {
  LOGIN_SUCCESS(state, token) {
    state.token = token
    localStorage.setItem('token', token)
    customAxios.defaults.headers.common["Authorization"] = `Bearer ${state.token}`
    store.commit('util/SEND_MESSAGE', ['success', 'Login efetuado com sucesso'])
    router.push('/')
  }
}

const actions = {
  login({ commit }, loginData) {
    axios.post(process.env.VUE_APP_LOGIN_ADDRESS, { auth: { email: loginData.email, password: loginData.password } })
         .then(response => {
           commit('LOGIN_SUCCESS', response.data.jwt)
           console.log(response)
         })
         .catch(error => console.log(error))
  },

  logout({ state }) {
    localStorage.removeItem('token')
    state.token = null
    customAxios.defaults.headers.common["Authorization"] = null
    store.commit('util/SEND_MESSAGE', ['success', 'Time ativado/desativado com sucesso'])
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
