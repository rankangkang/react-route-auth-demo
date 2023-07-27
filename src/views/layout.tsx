import { Layout, Menu, MenuProps } from 'antd'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
// 在 layout 页面获取用户信息

export default function ViewLayout(props: { children: ReactNode }) {
  const navigate = useNavigate()
  const items: MenuProps['items'] = [
    {
      label: '用户中心',
      key: 'user',
    },
    {
      label: '设置',
      key: 'setting',
    },
    {
      label: '产品列表',
      key: 'market',
    },
  ]

  return (
    <Layout hasSider>
      <Layout.Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}>
        <Menu
          theme='dark'
          mode='inline'
          items={items}
          onClick={(item) => {
            navigate(`/${item.key}`)
          }}
        />
      </Layout.Sider>
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <Layout.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          {props.children}
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
