import { Outlet, useParams, useSearchParams } from 'react-router-dom'
import './style.css'

export const Posts = () => {
  const params = useParams()
  const { id } = params
  const [qs] = useSearchParams()

  return (
    <div>
      <h1>
        Post
      </h1>
      <h2>
        {`Param: ${id}`} {`QS: ${qs.get('page')}`}
      </h2>
      <Outlet />
    </div>
  )
}
