import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import { isEmail, isInt, isFloat } from 'validator'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaUserCircle, FaEdit } from 'react-icons/fa'

import axios from '../../services/axios'
import history from '../../services/history'
import { Container } from '../../styles/GlobalStyle'
import { Form, ProfilePicture, Title } from './styled'
import Loading from '../../components/Loading'
import * as actions from '../../store/modules/auth/actions'

export default function Aluno({ match }) {
    const dispatch = useDispatch()
    const id = get(match, 'params.id', '')
    const [nome, setNome] = useState({ first: '' })
    const [sobrenome, setSobrenome] = useState({ last: '' })
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState({ age: '' })
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [foto, setFoto] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (!id) return

        async function getData() {
            try {
                setIsLoading(true)
                const { data } = await axios.get(`/alunos/${id}`)
                const Foto = get(data, 'picture.large', '')

                setFoto(Foto)
                setNome(data.nome)
                setSobrenome(data.sobrenome)
                setEmail(data.email)
                setIdade(data.idade)
                setPeso(data.peso)
                setAltura(data.altura)

                setIsLoading(false)
            } catch (err) {
                setIsLoading(false)
                const status = get(err, 'response.status', 0)
                const errors = get(err, 'response.data', [])

                if (status === 400) errors.map((error) => toast.error(error))
                history.push('/')
            }
        }

        getData()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let formErrors = false

        if (nome.length > 3 || nome.length < 100) {
            toast.error('Nome precisa ter entre 3 e 100 caracteres')
            formErrors = true
        }

        if (sobrenome.length > 3 || sobrenome.length < 100) {
            toast.error('Sobrenome precisa ter entre 3 e 100 caracteres')
            formErrors = true
        }

        if (!isEmail(email)) {
            toast.error('E-mail inválido')
            formErrors = true
        }

        if (!isInt(String(idade))) {
            toast.error('Idade inválida')
            formErrors = true
        }

        if (!isFloat(String(peso))) {
            toast.error('Peso inválido')
            formErrors = true
        }

        if (!isFloat(String(altura))) {
            toast.error('Altura inválida')
            formErrors = true
        }

        if (formErrors) return

        try {
            setIsLoading(true)

            if (id) {
                await axios.put(`/alunos/${id}`, {
                    nome,
                    sobrenome,
                    email,
                    idade,
                    peso,
                    altura,
                })
                toast.success('Aluno(a) editado(a) com sucesso!')
            } else {
                const { data } = await axios.post(`/alunos/`, {
                    nome,
                    sobrenome,
                    email,
                    idade,
                    peso,
                    altura,
                })
                toast.success('Aluno(a) criado(a) com sucesso!')
                history.push(`/aluno/${data.id}/edit`)
            }

            setIsLoading(false)
        } catch (err) {
            const status = get(err, 'response.status', 0)
            const data = get(err, 'response.data', {})
            const errors = get(data, 'errors', [])

            if (errors.length > 0) {
                errors.map((error) => toast.error(error))
            } else {
                toast.error('Erro desconhecido')
            }

            if (status === 401) dispatch(actions.loginFailure())
        }
    }

    return (
        <Container>
            <Loading isLoading={isLoading} />

            <Title>{id ? 'Editar aluno' : 'Novo aluno'}</Title>

            {id && (
                <ProfilePicture>
                    {foto ? <img src={foto} alt={nome} /> : <FaUserCircle size={180} />}
                    <Link to={`/fotos/${id}`}>
                        <FaEdit size={24} />
                    </Link>
                </ProfilePicture>
            )}

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
                <input
                    type="text"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Peso"
                />
                <input
                    type="text"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="Altura"
                />

                <button type="submit">Enviar</button>
            </Form>
        </Container>
    )
}

Aluno.propTypes = {
    match: PropTypes.shape({}).isRequired,
}
