import { FC, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getInvoices } from './data'

const UserItem: FC = () => {
  const invoices = getInvoices()
  const navigate = useNavigate()
  const { uid = null } = useParams()

  useEffect(() => {
    if (!invoices.some((inv) => inv.number === Number(uid))) {
      navigate('/404', { replace: true })
    }
  }, [])
  return <div style={{ border: '1px solid' }}>「{uid}」</div>
}

export default UserItem
