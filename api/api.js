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

  request(url, data, config) {
    let token = data.server_token ? data.server_token : Cookies.get('token')
    config = this.preRequest(config, token)
    return fetch(apiConfig.BASE_URL + url, config)
  }

  get(url, data, config) {
    config = config || this.defaultConfig
    config.url = url
    config.method = 'get'
    return this.request(url, data, config)
  }

  post(url, data, config) {
    config = config || this.defaultConfig
    config.url = url
    config.method = 'post'
    config.data = data
    return this.request(url, data, config)
  }

  put(url, data, config) {
    config = config || this.defaultConfig
    config.url = url
    config.method = 'put'
    config.data = data

    return this.request(url, data, config)
  }

  delete(url, data, config) {
    config = config || this.defaultConfig
    config.url = url
    config.method = 'delete'
    config.data = data

    return this.request(url, data, config)
  }
}
