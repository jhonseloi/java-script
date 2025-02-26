import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'

import { Container } from '../../styles/GlobalStyle'
import { AlunoContainer, ProfilePicture } from './styled'
import axios from '../../services/axios'

export default function Alunos() {
    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/alunos')
            console.log(response.data.results)
            setAlunos(response.data.results)
        }

        getData()
    }, [])

    return (
        <Container>
            <h1>Alunos</h1>

            <AlunoContainer>
                {alunos.map((aluno) => (
                    <div key={String(aluno.id)}>
                        <ProfilePicture>
                            {get(aluno, 'picture.large', false) ? (
                                <img src={aluno.picture.large} alt="" />
                            ) : (
                                <FaUserCircle size={45} />
                            )}
                        </ProfilePicture>

                        <span>
                            {aluno.name.first} {aluno.name.last}
                        </span>
                        <span>{aluno.email}</span>

                        <Link to={`/aluno/${aluno.id}/edit`}>
                            <FaEdit size={16} />
                        </Link>
                        <Link to={`/aluno/${aluno.id}/delete`}>
                            <FaWindowClose size={16} />
                        </Link>
                    </div>
                ))}
            </AlunoContainer>
        </Container>
    )
}
