import api from '../api'

export default class AuthsService {
  login(data) {
    return api.post(`/auth/v1/login/`, data)
  }

  forgotPassword(data) {
    return api.post(`/auth/v1/forgot/`, data)
  }

  resetPassword(data) {
    return api.post(`/auth/v1/reset/`, data)
  }

  socialLogin(data) {
    return api.post(`/social/v1/login/`, data)
  }
}
