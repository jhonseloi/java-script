import React from 'react'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { useDispatch } from 'react-redux'
import { get } from 'lodash'

import { Container } from '../../styles/GlobalStyle'
import { Form } from './styled'
import * as actions from '../../store/modules/auth/actions'

export default function Login(props) {
    const dispatch = useDispatch()
    const prevPath = get(props, 'location.state.prevPath', '/')

    const [email, setEmail] = React.useState('')
    const [login, setPassword] = React.useState({ password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        let formErrors = false

        if (!isEmail(email)) {
            formErrors = true
            toast.error('E-mail inválido.')
        }

        if (login.password.length < 6 || login.password.length > 30) {
            formErrors = true
            toast.error('Senha inválida.')
        }

        if (formErrors) return

        dispatch(actions.loginRequest({ email, login: { password: '' }, prevPath }))
    }

    return (
        <Container>
            <h1>Login</h1>

            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu e-mail"
                />
                <input
                    type="password"
                    value={login.password}
                    onChange={(e) => setPassword({ ...login, password: e.target.value })}
                    placeholder="Sua senha"
                />
                <button>Acessar</button>
            </Form>
        </Container>
    )
}
