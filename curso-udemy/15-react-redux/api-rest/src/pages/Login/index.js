import React from 'react'
import { useDispatch } from 'react-redux'

import { Container } from '../../styles/GlobalStyle'
import { Title, Paragrafo } from './styled'
// import axios from '../../services/axios'

export default function Login() {
    const dispatch = useDispatch()

    function handleClick(e) {
        e.preventDefault()

        dispatch({
            type: 'BOTAO_CLICADO',
        })
    }

    return (
        <Container>
            <Title>
                Login
                <small>Oie</small>
            </Title>
            <Paragrafo>Lorem ipsum...</Paragrafo>
            <button type="button" onClick={handleClick}>
                Enviar
            </button>
        </Container>
    )
}
