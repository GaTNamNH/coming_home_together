/**
 * @author Nam NH
 * Function to create and configure ApiClient
 */

import Api from './api'
import config from '../config'
import _ from 'lodash'

export default () => {
  let apiDefaultConfig = {
    baseURL: config.BASE_URL,
    timeout: config.API_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  let api = new Api(apiDefaultConfig, preRequest)
  return api
}

const preRequest = (requestConfig) => {
  // let extraHeaders = {}
  // let token = localStorage.getItem('token')
  // if (token) {
  //      extraHeaders['Authorization'] = 'JWT ' + token
  // }
  // requestConfig.headers = _.assign(requestConfig.headers, extraHeaders)
  return requestConfig
}