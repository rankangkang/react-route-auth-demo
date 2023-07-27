import { RoutesGuard } from '@/routes'
import routeConfig from '@/routes/config'
import { useRoutes } from 'react-router-dom'
import ViewLayout from './layout'

export default function View() {
  const RouteElements = useRoutes(routeConfig)

  return (
    <ViewLayout>
      <RoutesGuard>{RouteElements}</RoutesGuard>
    </ViewLayout>
  )
}
