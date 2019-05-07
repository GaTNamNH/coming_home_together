/**
 * @author Nam NH
 * This file combines all reducers and create redux store
 */

import { combineReducers } from 'redux'
// import { reducer as modal } from 'redux-modal'

const rootReducer = combineReducers({
  // modal,
  auths: require('./auths-redux').reducer
})

export default rootReducer