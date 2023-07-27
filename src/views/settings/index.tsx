import { UserRole } from '@/constants/user'
import { useAuth } from '@/hooks/auth'
import { Button } from 'antd'
import { FC, Fragment } from 'react'
import { useSelector } from '@/redux'
import { selectUser } from '@/redux/feats/user'

const Setting: FC = () => {
  const { name } = useSelector(selectUser)
  const { canUse } = useAuth()

  return (
    <Fragment>
      <h1>这是设置界面, 欢迎你 - {name}</h1>
      {canUse(UserRole.ADMIN) && <Button>只有ADMIN看见哦</Button>}
    </Fragment>
  )
}

export default Setting
