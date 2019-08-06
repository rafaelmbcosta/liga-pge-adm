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
    return customAxios.get(process.env.VUE_APP_CUSTOM_API_ADDRESS+'/teams')
  },
  getAPITeams(query){
    return customAxios.get(process.env.VUE_APP_CUSTOM_API_ADDRESS+'/teams/find_team?[search]q='+query)
  },
  addTeam(team){
    return customAxios.post(process.env.VUE_APP_CUSTOM_API_ADDRESS+'/teams', {
      team: { 
        name: team.nome,
        slug: team.slug,
        url_escudo_png: team.url_escudo_png,
        player_name: team.nome_cartola,
        id_tag: team.time_id
      }
    })
  }
}
