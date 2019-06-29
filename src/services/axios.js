import axios from 'axios'
import vuex from 'vuex'
import { TokenService } from '../services/storage.service'

export default axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + TokenService.getToken()
  }
})
