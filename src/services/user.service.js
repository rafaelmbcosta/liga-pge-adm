import ApiService from './api.service'
import { TokenService } from './storage.service'


class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.errorCode = errorCode
  }
}

const UserService = {
  login: async function(email, password) {
    const requestData = {
      method: 'post',
      url: process.env.VUE_APP_LOGGIN_ADDRESS,
      data: {
        auth: {
          email: email,
          password: password
        }
      }
    }
    try {
      const response = await ApiService.customRequest(requestData)
      TokenService.saveToken(response.data.jwt)
      ApiService.init()
      ApiService.setHeader()
      return response.data.access_token
    } catch (error) {
      throw new AuthenticationError(error.response.status, error.response.data.detail)
    }
  },

  logout() {
    TokenService.removeToken()
    ApiService.removeHeader()
  }
}

export default UserService

export { UserService, AuthenticationError }
