import { Spin } from 'antd'
import { Suspense } from 'react'

function Loading() {
  return (
    <Spin
      size='large'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  )
}

// 懒加载
export default function lazyLoad(Comp: React.LazyExoticComponent<any>): React.ReactNode {
  return (
    <Suspense fallback={<Loading />}>
      <Comp />
    </Suspense>
  )
}

lazyLoad.prototype.Loading = Loading
