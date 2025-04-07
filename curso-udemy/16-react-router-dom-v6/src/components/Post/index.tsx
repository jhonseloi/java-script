import { useParams, useSearchParams } from 'react-router-dom'
import './style.css'

export const Post = () => {
  const params = useParams()
  const { id } = params
  const [qs] = useSearchParams()

  return (
    <div>
      <h1>
        Post
        <p>
          {`Param: ${id}`} {`QS: ${qs.get('page')}`}
        </p>
      </h1>
    </div>
  )
}
