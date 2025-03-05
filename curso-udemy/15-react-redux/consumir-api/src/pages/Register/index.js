import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { useSelector, useDispatch } from 'react-redux'

import { Container } from '../../styles/GlobalStyle'
import { Form } from './styled'
import Loading from '../../components/Loading'
import * as actions from '../../store/modules/auth/actions'

export default function Register() {
    const dispatch = useDispatch()

    const id = useSelector((state) => state.auth.user.id)
    const nameStored = useSelector((state) => state.auth.user.name)
    const emailStored = useSelector((state) => state.auth.user.email)
    const isLoading = useSelector((state) => state.auth.isLoading)

    const [name, setName] = useState({ first: '', last: '' })
    const [email, setEmail] = useState('')
    const [login, setPassword] = useState({ password: '' })

    React.useEffect(() => {
        if (!id) return

        setName(nameStored)
        setEmail(emailStored)
    }, [emailStored, id, nameStored])

    async function handleSubmit(e) {
        e.preventDefault()

        let formErrors = false

        if (name.first.length < 3 || name.first.length > 100) {
            formErrors = true
            toast.error('Nome deve ter entre 3 e 100 caracteres.')
        }

        if (name.last.length < 3 || name.last.length > 100) {
            formErrors = true
            toast.error('Sobrenome deve ter entre 3 e 100 caracteres.')
        }

        if (!isEmail(email)) {
            formErrors = true
            toast.error('E-mail inválido.')
        }

        if (!id && (login.password.length < 6 || login.password.length > 30)) {
            formErrors = true
            toast.error('Senha deve ter entre 6 e 30 caracteres.')
        }

        if (formErrors) return

        dispatch(actions.registerRequest({ name, email, login, id }))
    }

    return (
        <Container>
            <Loading isLoading={isLoading} />

            <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>

            <Form onSubmit={handleSubmit}>
                <label htmlFor="name first">
                    Nome:
                    <input
                        type="text"
                        value={name.first}
                        onChange={(e) => setName({ ...name, first: e.target.value })}
                        placeholder="Seu nome"
                    />
                </label>
                <label htmlFor="name last">
                    Sobrenome:
                    <input
                        type="text"
                        value={name.last}
                        onChange={(e) => setName({ ...name, last: e.target.value })}
                        placeholder="Seu sobrenome"
                    />
                </label>
                <label htmlFor="email">
                    E-mail:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Seu e-mail"
                    />
                </label>
                <label htmlFor="login password">
                    Senha:
                    <input
                        type="password"
                        value={login.password}
                        onChange={(e) => setPassword({ ...login, password: e.target.value })}
                        placeholder="Sua senha"
                    />
                </label>

                <button type="submit">{id ? 'Salvar' : 'Cria conta'}</button>
            </Form>
        </Container>
    )
}
