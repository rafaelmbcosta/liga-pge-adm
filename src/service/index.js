import customAxios from '@/auth/axios-auth'

export default {
  teamActivation(team, value) {
    return customAxios.post(process.env.VUE_APP_CUSTOM_API_ADDRESS+'/teams/activation', {
      team: {
        id: team.id,
        active: value
      }
    })
  },
  getTeams () {
    console.log(customAxios.defaults)
    return customAxios.get(process.env.VUE_APP_CUSTOM_API_ADDRESS+'/teams')
  }
}
