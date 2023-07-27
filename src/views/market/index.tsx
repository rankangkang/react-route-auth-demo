// 此处二级列表

import { useNavigate } from 'react-router-dom'

const list = [
  { id: '11111', name: 'iphone' },
  { id: '22222', name: 'pc' },
  { id: '33333', name: 'android' },
  { id: '44444', name: 'playstation' },
]

export default function Products() {
  const navigate = useNavigate()

  return (
    <>
      <h1>市场</h1>
      <ol style={{ cursor: 'pointer' }}>
        {list.map((item, idx) => (
          <li
            key={idx}
            onClick={() => {
              navigate(`./${item.id}`)
            }}>
            {item.name}
          </li>
        ))}
      </ol>
    </>
  )
}
