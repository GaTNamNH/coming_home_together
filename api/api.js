/**
 * @author Nam NH
 * ApiClient to interact with api server
 */

import fetch from 'isomorphic-unfetch'
import Cookies from 'js-cookie'
import apiConfig from '../config'

export default class Api {
  constructor(defaultConfig, preRequest) {
    this.defaultConfig = defaultConfig
    this.preRequest = preRequest
  }

  request(url, cookies) {
    let token = cookies ? cookies.token : Cookies.get('token')
    this.defaultConfig = this.preRequest(this.defaultConfig, token)
    return fetch(apiConfig.BASE_URL + url, this.defaultConfig)
  }

  get(url, cookies) {
    this.defaultConfig.method = 'get'
    return this.request(url, cookies)
  }

  post(url, data, cookies) {
    this.defaultConfig.method = 'post'
    if (!(data instanceof FormData)) {
      data = JSON.stringify(data)
    }
    this.defaultConfig.body = data
    return this.request(url, cookies)
  }

  put(url, data, cookies) {
    this.defaultConfig.method = 'put'
    if (!(data instanceof FormData)) {
      data = JSON.stringify(data)
    }
    this.defaultConfig.body = data
    return this.request(url, cookies)
  }

  patch(url, data, cookies) {
    this.defaultConfig.method = 'patch'
    if (!(data instanceof FormData)) {
      data = JSON.stringify(data)
    }
    this.defaultConfig.body = data
    return this.request(url, cookies)
  }

  delete(url, cookies) {
    this.defaultConfig.method = 'delete'
    return this.request(url, cookies)
  }
}
