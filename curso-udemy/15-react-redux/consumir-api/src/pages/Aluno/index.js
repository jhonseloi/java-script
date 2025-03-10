import React from 'react'
import { get } from 'lodash'
import PropTypes from 'prop-types'

import { Container } from '../../styles/GlobalStyle'
import Form from './styled'

export default function Aluno({ match }) {
    const id = get(match, 'params.id', 0)
    const [nome, setNome] = useState({ first: '' })
    const [sobrenome, setSobrenome] = useState({ last: '' })
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState({ age: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Container>
            <h1>{id ? 'Editar aluno' : 'Novo aluno'}</h1>

            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome"
                />
                <input
                    type="text"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                    placeholder="Sobrenome"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                />
                <input
                    type="number"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    placeholder="Idade"
                />

                <button type="submit">Enviar</button>
            </Form>
        </Container>
    )
}

Aluno.propTypes = {
    match: PropTypes.shape({}).isRequired,
}
