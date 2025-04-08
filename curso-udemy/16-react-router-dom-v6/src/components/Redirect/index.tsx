import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

export const Redirect = () => {
  const [time, setTime] = useState(5)
  const timeout = useRef(0)
  const navigate = useNavigate()

  useEffect(() => {
    clearTimeout(timeout.current)

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1)
    }, 1000)

    if (time <= 0) {
      navigate('/')
    }

    return () => {
      clearTimeout(timeout.current)
    }
  }, [time, navigate])

  return (
    <div>
      <h1>Você será redirecionado em {time}</h1>
    </div>
  )
}
