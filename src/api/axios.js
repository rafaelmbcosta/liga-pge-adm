import axios from 'axios'
import vuex from 'vuex'

const API_URL = process.env.VUE_APP_CUSTOM_API_ADDRESS || 'http://localhost:3000/api/v1'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})

