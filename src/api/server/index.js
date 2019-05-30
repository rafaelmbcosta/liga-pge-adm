import axios from 'axios'

export default {
  serviceLogin (email, password) {
    console.log('Entrou no Valendo!')
    return axios.post(process.env.VUE_APP_API_CLIENT+'/user_token', {
      auth: {
        email: email,
        password: password
      }
    })
  },
  getTeams () {
    return axios.get(process.env.VUE_APP_API_CLIENT+'/api/v1/teams')
  }
}