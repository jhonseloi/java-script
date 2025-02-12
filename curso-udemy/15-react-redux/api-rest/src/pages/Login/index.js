import React from 'react'

import { Container } from '../../styles/GlobalStyle'
import { Title, Paragrafo } from './styled'
// import axios from '../../services/axios'

export default function Login() {
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
