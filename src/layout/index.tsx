import type { ProSettings } from '@ant-design/pro-layout'
import { ProLayout, PageContainer } from '@ant-design/pro-layout'
import { ReactNode, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { config } from '@/config'
import { layoutRouteProps } from './config'

// 在 layout 页面获取用户信息
const settings: Partial<ProSettings> = {
  fixSiderbar: true,
  layout: 'mix',
  suppressSiderWhenMenuEmpty: true, // 菜单为空时隐藏
}

export default function ViewLayout(props: { children: ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const layoutRoutes = useMemo(() => {
    return layoutRouteProps(location)
  }, [location])

  return (
    <ProLayout
      token={{
        sider: {
          colorMenuBackground: '#fff',
          colorBgMenuItemHover: '#f0f7ff',
          colorBgMenuItemSelected: '#f0f7ff',
          colorTextMenu: '#000000E0',
          colorTextMenuSelected: '#417FF9',
          colorTextMenuActive: '#494949',
        },
      }}
      title={config.title}
      // logo={}
      // TODO: route 配置
      route={layoutRoutes}
      location={location}
      // TODO: layout 渲染
      // headerTitleRender={(logo, title) => {
      //   return (
      //     <Space size='small'>
      //       <Link to='/'>{logo}</Link>
      //       <Link to='/'>{title}</Link>
      //     </Space>
      //   )
      // }}
      menuItemRender={(item, dom) => {
        return (
          <div
            style={{
              fontSize: 14,
            }}
            onClick={() => {
              if (item.path) {
                navigate(item.path)
              }
            }}>
            {dom}
          </div>
        )
      }}
      subMenuItemRender={(item, dom) => (
        <div
          style={{
            fontSize: 14,
            padding: '8px 0',
          }}>
          {dom}
        </div>
      )}
      fixedHeader={true}
      menu={{
        type: 'group',
      }}
      {...settings}>
      <PageContainer
        header={{
          breadcrumb: {},
          title: <></>,
          style: {
            display: 'none',
          },
        }}
        childrenContentStyle={{
          paddingInline: 15,
          paddingBlock: 15,
          height: '100%',
        }}>
        {props.children}
      </PageContainer>
    </ProLayout>
  )
}
