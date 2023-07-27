import { useParams } from 'react-router-dom'

export default function ItemSetting() {
  const { id } = useParams<{ id: string }>()

  return (
    <main>
      <h1> 商品 {id} 设置页 </h1>
    </main>
  )
}
