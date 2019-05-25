/**
 * @author Nam NH
 * Function to create and configure ApiClient
 */

import Api from './api'

export default () => {
  let apiDefaultConfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  let api = new Api(apiDefaultConfig, preRequest)
  return api
}

const preRequest = (requestConfig, token) => {
  let extraHeaders = {}
  if (token) {
    extraHeaders['Authorization'] = 'JWT ' + token
  }
  requestConfig.headers = Object.assign(requestConfig.headers, extraHeaders)
  return requestConfig
}