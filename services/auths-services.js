import api from '../api'

export default class AuthsService {
  login(data) {
    return api.post(`/todos/v1/today/`, data)
  }

  forgotPassword(data) {
    return api.post(`/auths/v1/reset-request/`, data)
  }

  resetPassword(data) {
    return api.post(`/auths/v1/reset-with-key/${data.uidb64}/${data.token_key}/`, data)
  }
}
