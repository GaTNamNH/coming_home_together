/**
 * @author EAS
 * Saga index: connects action type and saga
 */

import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { AuthsTypes } from '../redux/auths-redux'
/* ------------- Sagas ------------- */
import AuthsSagas from './auths-sagas'
/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
    yield all([
        //authentication
        takeLatest(AuthsTypes.LOGIN_REQUEST, AuthsSagas.login),
        takeLatest(AuthsTypes.FORGOT_PASSWORD_REQUEST, AuthsSagas.forgotPassword),
        takeLatest(AuthsTypes.RESET_PASSWORD_REQUEST, AuthsSagas.resetPassword),
        takeLatest(AuthsTypes.SOCIAL_LOGIN_REQUEST, AuthsSagas.socialLogin),
    ])
}