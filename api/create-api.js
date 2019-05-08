/**
 * @author Nam NH
 * Function to create and configure ApiClient
 */

import Api from './api'
import config from '../config'
import _ from 'lodash'
import { Cookies } from 'react-cookie'

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
  let extraHeaders = {}
  const cookies = new Cookies()
  let token = cookies.get('token')
  if (token) {
    extraHeaders['Authorization'] = 'JWT ' + token
  }
  requestConfig.headers = _.assign(requestConfig.headers, extraHeaders)
  return requestConfig
}