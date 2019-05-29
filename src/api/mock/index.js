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
  getTeams () {
    return fetch({ 'data': teams }, 500)
  },
  addTeam(team) {
    store.state.teams.push(team)
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
