import axios from 'axios'

export default {
  login (email, password) {
    axios.post('http://localhost:3000/user_token', {
      auth: {
        email: email,
        password: password
      }
    })
    .then(response => {
      // TODO: criar um 
      state.messages = []
      state.messages.push('Sucesso')
      state.token = response.data.jwt
      localStorage.token = response.data.jwt
    })
    .catch(error => {
      state.messages.push('Erro ao recuperar token ' + error)
    })
  }
}