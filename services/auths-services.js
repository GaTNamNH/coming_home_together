import api from '../api'

export default class AuthsService {
  login(data, cookies) {
    return api.post(`/todos/v1/today/`, data, cookies)
  }

  forgotPassword(data, cookies) {
    return api.post(`/file-managements/v1/upload/`, data, cookies)
  }

  resetPassword(data, cookies) {
    return api.post(`/auths/v1/reset-with-key/${data.uidb64}/${data.token_key}/`, data, cookies)
  }
}
