import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    common: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }
})

export default instance
