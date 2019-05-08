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

  request(url, cookies, config) {
    let token = cookies ? cookies.token : Cookies.get('token')
    config = this.preRequest(config, token)
    return fetch(apiConfig.BASE_URL + url, config)
  }

  get(url, cookies) {
    let config = this.defaultConfig
    config.method = 'get'
    return this.request(url, cookies, config)
  }

  post(url, data, cookies) {
    let config = this.defaultConfig
    config.method = 'post'
    config.data = data
    return this.request(url, cookies, config)
  }

  put(url, data, cookies) {
    let config = this.defaultConfig
    config.method = 'put'
    config.data = data

    return this.request(url, cookies, config)
  }

  delete(url, data, cookies) {
    let config = this.defaultConfig
    config.method = 'delete'
    config.data = data

    return this.request(url, cookies, config)
  }
}
