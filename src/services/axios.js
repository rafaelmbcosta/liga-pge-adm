import axios from 'axios'
import { TokenService } from '../services/storage.service'

export default axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + TokenService.getToken()
  }
})

axios.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${ TokenService.getToken() }`;
    }
    return config;
  }, 

  (error) => {
    return Promise.reject(error);
  }
);