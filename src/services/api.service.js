import axios from './axios'
import { TokenService } from '../services/storage.service'

const ApiService = {
  init(baseURL) {
    axios.baseURL = baseURL || 'http://localhost:3000/api/v1'
  },

  removeHeader() {
    axios.headers = {}
  },

  setHeader() {
    axios.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + TokenService.getToken()
    }
  },

  get(resource) {
    return axios.get(resource)
  },

  post(resource, data) {
    return axios.post(resource, data)
  },

  put(resource, data) {
    return axios.put(resource, data)
  },

  delete(resource) {
    return axios.delete(resource)
  },

  getTeams() {
    return this.get(process.env.VUE_APP_CUSTOM_API_ADDRESS+'/teams')
  },

  addTeam(team) {
    return this.post(process.env.VUE_APP_CUSTOM_API_ADDRESS+'/teams/add_team', team)
  },

  toggleTeam(data) {
    return this.post(process.env.VUE_APP_CUSTOM_API_ADDRESS+'/teams/toggle_team', data)
  },

  customRequest(data) {
    return axios(data)
  }
}

export default ApiService
