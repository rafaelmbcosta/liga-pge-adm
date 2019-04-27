//https://tahazsh.com/use-mock-data-in-vue

import players from './data/players.json'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
    resolve(mockData)
    }, time)
  })
}

export default {
  getPlayers () {
    return fetch({ 'data': players }, 500)
  },
  serviceLogin (email, password) {
    if (email == 'admin@gmail.com' && password == '123456'){
      return fetch({ 'data': { 'jwt': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' }})
    } else {
      return Promise.reject('Login Inválido');
    }
  }
}
