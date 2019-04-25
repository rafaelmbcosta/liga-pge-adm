//https://tahazsh.com/use-mock-data-in-vue

import players from './data/players'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
    resolve(mockData)
    }, time)
  })
}

export default {
  getPlayers () {
    return fetch(players, 500)
  },
  login (email, password) {
    
  }
}
