import axios from 'axios'

export default {
  serviceLogin (email, password) {
    console.log('Entrou no Valendo!')
    return axios.post('http://localhost:3000/user_token', {
      auth: {
        email: email,
        password: password
      }
    })
  }
}