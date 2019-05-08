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
    this.defaultConfig.data = data
    return this.request(url, cookies)
  }

  put(url, data, cookies) {
    this.defaultConfig.method = 'put'
    this.defaultConfig.data = data
    return this.request(url, cookies)
  }

  delete(url, data, cookies) {
    this.defaultConfig.method = 'delete'
    this.defaultConfig.data = data
    return this.request(url, cookies)
  }
}
