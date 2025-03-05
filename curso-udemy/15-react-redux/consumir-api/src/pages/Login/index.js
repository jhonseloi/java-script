import React from 'react'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'

import { Container } from '../../styles/GlobalStyle'
import { Form } from './styled'
import * as actions from '../../store/modules/auth/actions'

import Loading from '../../components/Loading'

export default function Login(props) {
    const dispatch = useDispatch()

    const prevPath = get(props, 'location.state.prevPath', '/')

    const isLoading = useSelector((state) => state.auth.isLoading)

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
            <Loading isLoading={isLoading} />

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
