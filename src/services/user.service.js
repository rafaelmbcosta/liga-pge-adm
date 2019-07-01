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
  /**
   * Login the user and store the access token to TokenService.
   *
   * @returns access_token
   * @throws AuthenticationError
  **/
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
      TokenService.saveRefreshToken(response.data.jwt)
      ApiService.init()
      ApiService.setHeader()
      return response.data.access_token
    } catch (error) {
      throw new AuthenticationError(error.response.status, error.response.data.detail)
    }
  },

  logout() {
    // Remove the token and remove Authorization header from Api Service as well
    TokenService.removeToken()
    TokenService.removeRefreshToken()
    ApiService.removeHeader()
  }
}

export default UserService

export { UserService, AuthenticationError }
