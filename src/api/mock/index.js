//reference: https://tahazsh.com/use-mock-data-in-vue

import teams from './data/teams.json'
import store from '@/store/store.js'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
    resolve(mockData)
    }, time)
  })
}

export default {
  teamActivation(_team, _value){
    return fetch({ 'data': { "sucesso": true } }, 500)

  },
  getTeams () {
    return fetch({ 'data': teams }, 500)
  },
  addTeam(team) {
    console.log('dentro do mock: '+team.nome)
    let params = { name: team.nome,
                   player_name: team.nome_cartola,
                   url_escudo_png: team.url_escudo_png,
                   active: true 
    }
    store.state.teams.push(params)
    return fetch({ 'data': { "sucesso": true } }, 500)
  },
  serviceLogin (email, password) {
    if (email == 'admin@gmail.com' && password == '123456'){
      return fetch({ 'data': { 'jwt': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' }})
    } else {
      return Promise.reject('Login Inválido');
    }
  }
}
