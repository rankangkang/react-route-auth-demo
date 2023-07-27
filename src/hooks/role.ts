import store, { useSelector } from '@/redux'
import { selectUser } from '@/redux/feats/user'

// 获取用户角色
export function getRole() {
  const s = selectUser(store.getState())

  return s.role
}

// 用户角色钩子
export function useRole() {
  const user = useSelector(selectUser)

  return user.role
}
