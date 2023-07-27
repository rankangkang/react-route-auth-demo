import { FC, Fragment, lazy } from 'react'
import { RouteProps } from '@/types/routes'
import { matchRoutes, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/auth'
import store from '@/redux'
import { selectUser } from '@/redux/feats/user'
import routes from './config'
import { useRole } from '@/hooks/role'
import { hasIntersection } from '@/utils'
import { lazyLoad } from '@/components'

// 通过用户角色筛选路由
export function screenRoutesByRole(routes: RouteProps[]) {
  const { role } = selectUser(store.getState())

  return routes
    .map((route) => {
      if (route.meta) {
        const { roles: canIn, unRoles: cantIn } = route.meta

        // 以unRoles 优先
        if (Array.isArray(cantIn) && cantIn.includes(role)) return null

        if (Array.isArray(canIn) && !canIn.includes(role)) return null
      }

      if (!route.children) return route
      route.children = screenRoutesByRole(route.children)
      return route
    })
    .filter((i) => i !== null) as RouteProps[]
}

// 路由登录权限组件
export const RouterAuth: FC<{ children: any }> = ({ children }) => {
  const { isLogin } = useAuth()
  const location = useLocation()
  const mathchs = matchRoutes(routes, location)
  const isNeedLogin = mathchs?.some((item) => {
    const route: RouteProps = item.route

    // 没有配置字段的直接返回
    if (!route.meta) return false
    // 返回是否需要登录
    return route.meta.auth
  })

  if (isNeedLogin && !isLogin) {
    console.log('需要登录')
    // 跳转到登录
    return <Navigate to='/login' state={{ from: location.pathname }} replace />
  }

  // return children as React.ReactElement
  return <Fragment>{children}</Fragment>
}

const View403 = lazyLoad(lazy(() => import('@/views/403')))

// 根路由守卫,无需配合 screenRoutesByRole 使用
export const RoutesGuard: FC<{ children: any }> = ({ children }) => {
  const location = useLocation()
  // 是否已登录
  const { isLogin } = useAuth()
  const role = useRole()
  // 获取匹配到的路由
  const matches = matchRoutes(routes, location)
  // 是否需要登录
  const isNeedLogin = matches?.some((item) => {
    const route: RouteProps = item.route

    // 没有配置字段的直接返回
    if (!route.meta) return false
    // 返回是否需要登录
    return route.meta.auth
  })

  // 需要登录,跳转至登录页或forbidden
  if (isNeedLogin && !isLogin) {
    // 跳转登录页
    console.log('未登录,请先登录')
    return <Navigate to='/login' state={{ from: location.pathname }} replace />
  }

  // 用户已登录,校验是否有权限
  const canAccess = matches?.every((item) => {
    const route: RouteProps = item.route

    if (route.meta) {
      const { roles, unRoles } = route.meta

      // unRoles 优先,在unRoles 中,不具备权限
      if (Array.isArray(unRoles) && hasIntersection(unRoles, [role])) return false

      // 不在 roles 数组中,不具备权限
      if (Array.isArray(roles) && !hasIntersection(roles, [role])) return false
    }

    return true
  })

  // 无权限访问，展示引导
  if (!canAccess) {
    console.log('无权限访问', role)
    return <Fragment>{View403}</Fragment>
  }

  // 可以访问
  return <Fragment>{children}</Fragment>
}
