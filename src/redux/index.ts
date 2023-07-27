import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch as UseDispatch,
  useSelector as UseSelector,
} from 'react-redux'
import rootReducer from './reducer'

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type RootDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export type RootThunk<ReturnType = void, T = string> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<T>
>

// dispatch hook
export const useDispatch = () => UseDispatch<RootDispatch>()

// selector hook
export const useSelector: TypedUseSelectorHook<RootState> = UseSelector

export const dispatch = store.dispatch
