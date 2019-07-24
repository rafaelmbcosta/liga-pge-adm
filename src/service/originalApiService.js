import axios from 'axios'

export default {
  getAPITeams (value) {
    let server = process.env.VUE_APP_OFFICIAL_API_ADDRESS
    return axios.get(server+'times?q='+value)
  },

  login(email, password) {
    let server = process.env.VUE_APP_LOGIN_ADDRESS
    return axios.post(server, { auth: { email: email, password: password } })
  }
}
