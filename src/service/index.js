import customAxios from '@/auth/axios-auth'

export default {
  // serviceLogin (email, password) {
  //   console.log('Entrou no Valendo!')
  //   return axios.post(process.env.VUE_APP_LOGGIN_ADDRESS, {
  //     auth: {
  //       email: email,
  //       password: password
  //     }
  //   })
  // },
  // addTeam (team) {
  //   return axios.post(process.env.VUE_APP_CUSTOM_API_ADDRESS+'/teams/create', {
  //     team: team
  //   })
  // },
  // teamActivation(team, value) {
  //   return axios.post(process.env.VUE_APP_CUSTOM_API_ADDRESS+'/teams/activation', {
  //     team: {
  //       id: team.id,
  //       active: value
  //     }
  //   })
  // },
  getTeams () {
    console.log('ok, chegou no get teams do service')
    console.log(customAxios.defaults)
    return customAxios.get(process.env.VUE_APP_CUSTOM_API_ADDRESS+'/teams')
  }
}
