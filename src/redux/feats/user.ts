import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { UserRole } from '@/constants/user'
import { RootState } from '..'

export interface StoreUserState {
  uid: string
  name: string
  phone: string
  role: UserRole
}

const initState = (): StoreUserState => {
  return {
    uid: '',
    name: '',
    phone: '',
    role: UserRole.GUEST,
  }
}

export const userSlice = createSlice({
  name: '@user',
  initialState: initState(),
  reducers: {
    init(state) {
      const initS = initState()

      Object.keys(initS).forEach((key) => {
        state[key] = initS[key]
      })
    },
    update(state, action: PayloadAction<Partial<StoreUserState>>) {
      const incomming = action.payload

      Object.keys(incomming).forEach((key) => {
        state[key] = incomming[key]
      })
    },
  },
})

export const userActions = userSlice.actions

export const selectUser = (state: RootState) => state[userSlice.name]
