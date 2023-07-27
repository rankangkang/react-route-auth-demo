import type { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom'
import { UserRole } from '@/constants/user'

interface CustomRouteFields {
  meta?: {
    auth?: boolean
    // roles和unRoles冲突的时候，冲突的部分以unRoles为准
    roles?: UserRole[] // 空数组代表没有谁可以访问
    unRoles?: UserRole[] // 空数组代表没有谁不可以访问
  }
}

type AppIndexRouteObject = IndexRouteObject & CustomRouteFields
type AppNonIndexRouteObject = Omit<NonIndexRouteObject, 'children'> &
  CustomRouteFields & {
    children?: (AppIndexRouteObject | AppNonIndexRouteObject)[]
  }

export type RouteProps = AppIndexRouteObject | AppNonIndexRouteObject
