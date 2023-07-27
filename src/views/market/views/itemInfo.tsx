import { useParams } from 'react-router-dom'

export default function Item() {
  const { id } = useParams<{ id: string }>()

  return (
    <main>
      <h1> 商品 {id} 信息页 </h1>
    </main>
  )
}
