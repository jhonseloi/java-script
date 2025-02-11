import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Container } from '../../styles/GlobalStyle'
import { Title, Paragrafo } from './styled'

export default function Login() {
    const location = useLocation()

    useEffect(() => {
        toast.success('Sucesso!')
        toast.error('Erro!')
    }, [location.pathname])

    return (
        <Container>
            <Title>
                Login
                <small>Oie</small>
            </Title>
            <Paragrafo>Lorem ipsum...</Paragrafo>
            <button type="button">Enviar</button>
        </Container>
    )
}
