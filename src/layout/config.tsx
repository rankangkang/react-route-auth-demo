import routes from '@/routes/config'
import {
  AppstoreOutlined,
  BuildOutlined,
  ContainerOutlined,
  SmileOutlined,
  PlusSquareOutlined,
  BlockOutlined,
  ProfileOutlined,
} from '@ant-design/icons'
import type { MenuDataItem } from '@ant-design/pro-layout/es/typing'
import { Location, matchRoutes } from 'react-router-dom'

interface Route extends Omit<MenuDataItem, 'routes'> {
  children?: Route[]
}

// 顶级菜单
const getTopLevelMenuRoute = () => {
  const route: Route = {
    // path: '/',
    // name: '菜单',
    // icon: <AppstoreOutlined rev={undefined} />,
    children: [
      {
        name: '欢迎',
        path: '/welcome',
      },
      {
        name: '用户中心',
        path: '/user',
      },
      {
        name: '设置',
        path: '/setting',
      },
      {
        name: '商城',
        path: '/market',
      },
    ],
  }

  return route
}
// 商城菜单
const getMarketMenuRoute = (prefix: string) => {
  const route: Route = {
    // path: '/',
    // name: '菜单',
    // icon: <AppstoreOutlined rev={undefined} />,
    children: [
      {
        name: '详情',
        path: `${prefix}/info`,
      },
      {
        name: '设置',
        path: `${prefix}/setting`,
      },
    ],
  }

  return route
}

export function layoutRouteProps(location: Location) {
  const matches = matchRoutes(routes, location)

  if (matches === null) {
    return undefined
  }

  const [_, match] = matches

  // 根据配置返回菜单
  switch (match?.route?.name) {
    case 'market':
      return getMarketMenuRoute(match.pathnameBase)
    default:
      return getTopLevelMenuRoute()
  }
}
