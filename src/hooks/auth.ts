import { UserRole } from '@/constants/user'
import { dispatch } from '@/redux'
import { userActions, selectUser } from '@/redux/feats/user'
import store from '@/redux'

// 应该写在 store 里的
let isLogin = false

const signIn = () => {
  isLogin = true
  dispatch(
    userActions.update({
      uid: '123',
      name: 'awefeng',
      phone: '',
      role: UserRole.ADMIN,
    }),
  )
}
const signOut = () => {
  isLogin = false
  dispatch(userActions.init())
}
// 角色功能控制
const canUse = (canUseRole: UserRole | UserRole[]): boolean => {
  const { role } = selectUser(store.getState())

  if (Array.isArray(canUseRole)) return canUseRole.includes(role)
  return role === canUseRole
}

export function useAuth() {
  return {
    signIn,
    signOut,
    isLogin,
    canUse,
  }
}
