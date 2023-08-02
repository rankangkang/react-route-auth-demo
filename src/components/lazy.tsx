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
export function lazyLoad(Comp: React.LazyExoticComponent<any>): React.ReactNode {
  return (
    <Suspense fallback={<Loading />}>
      <Comp />
    </Suspense>
  )
}

// 该方式无法实现 lazyLoad.Loading 方式直接使用 Loading 组件
// lazyLoad.prototype.Loading = Loading

const lazy = lazyLoad as typeof lazyLoad & {
  Loading: typeof Loading
}

lazy.Loading = Loading

export default lazy
