import { combineReducers } from '@reduxjs/toolkit'
import { userSlice } from './feats/user'

const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
})

export default rootReducer
