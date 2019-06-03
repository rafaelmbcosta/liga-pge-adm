import axios from 'axios'

export default {
  serviceLogin (email, password) {
    console.log('Entrou no Valendo!')
    return axios.post(process.env.CUSTOM_API_ADDRESS+'/user_token', {
      auth: {
        email: email,
        password: password
      }
    })
  },
  addTeam (team) {
    return axios.post(process.env.CUSTOM_API_ADDRESS+'/teams/create', {
      team: team
    })
  },
  teamActivation(team, value) {
    return axios.post(process.env.CUSTOM_API_ADDRESS+'/teams/activation', {
      team: {
        id: team.id,
        active: value
      }
    })
  },
  getTeams () {
    return axios.get(process.env.CUSTOM_API_ADDRESS+'/teams')
  }
}