import { lazy } from 'react'
import { UserRole } from '@/constants/user'
import { RouteProps } from '@/types/routes'
import { Navigate, Outlet } from 'react-router-dom'
import { lazyLoad } from '@/components'

const routes: RouteProps[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { index: true, element: <Navigate replace to='/welcome' /> },
      {
        path: 'welcome',
        element: lazyLoad(lazy(() => import('@/views/welcome'))),
      },
      {
        path: 'login',
        element: lazyLoad(lazy(() => import('@/views/login'))),
      },
      {
        path: 'setting',
        meta: {
          auth: true,
          roles: [UserRole.ADMIN],
        },
        element: lazyLoad(lazy(() => import('@/views/settings'))),
      },
      {
        path: 'user',
        element: lazyLoad(lazy(() => import('@/views/user'))),
        meta: {
          auth: true,
          unRoles: [UserRole.GUEST],
        },
      },
      {
        path: 'market',
        element: lazyLoad(lazy(() => import('@/views/market'))),
        meta: {
          // 需要登录
          auth: true,
        },
      },
      {
        path: 'market/:id',
        name: 'market',
        meta: {
          // 需要登录
          auth: true,
        },
        children: [
          {
            index: true,
            element: <Navigate to='info' />,
          },
          {
            path: 'info',
            element: lazyLoad(lazy(() => import('@/views/market/views/itemInfo'))),
          },
          {
            path: 'setting',
            element: lazyLoad(lazy(() => import('@/views/market/views/itemSetting'))),
          },
        ],
      },
      {
        path: '403',
        element: lazyLoad(lazy(() => import('@/views/403'))),
      },
    ],
  },
  { path: '*', element: lazyLoad(lazy(() => import('@/views/404'))) },
]

export default routes
