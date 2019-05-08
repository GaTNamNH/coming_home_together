/**
 * @author Nam NH
 * TodoSagas
 */

import { put, call } from 'redux-saga/effects'

import { authsService } from '../services'
import AuthsActions from '../redux/auths-redux'

const AuthsSagas = {
  *login({ data, cookies }) {
    let response = yield call(authsService.login, data, cookies)
    let responsedata = yield response.json()
    if (response.status < 400) {
      responsedata.login = true
      yield put(AuthsActions.authsSuccess(responsedata))
    } else {
      responsedata.status = response.status
      yield put(AuthsActions.authsFailure(responsedata))
    }
  },

  *forgotPassword({ data, cookies }) {
    let response = yield call(authsService.forgotPassword, data, cookies)
    let responsedata = yield response.json()
    if (response.status < 400) {
      responsedata.forgotPassword = true
      yield put(AuthsActions.authsSuccess(responsedata))
    } else {
      yield put(AuthsActions.authsFailure(responsedata))
    }
  },

  *resetPassword({ data, cookies }) {
    let response = yield call(authsService.resetPassword, data, cookies)
    let responsedata = yield response.json()
    if (response.status < 400) {
      responsedata.resetPassword = true
      yield put(AuthsActions.authsSuccess(responsedata))
    } else {
      yield put(AuthsActions.authsFailure(responsedata))
    }
  }
}

export default AuthsSagas