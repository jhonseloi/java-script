import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { get } from 'lodash'
import * as actions from './actions'
import * as types from '../types'
import axios from '../../../services/axios'
import history from '../../../services/history'

function* loginRequest({ payload }) {
    try {
        const response = yield call(axios.post, '/tokens', payload)
        yield put(actions.loginSuccess({ ...response.data }))

        toast.success('Você fez login.')

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`
        history.push(payload.prevPath)
    } catch (e) {
        toast.error('Usuário ou senha inválido.')

        yield put(actions.loginFailure())
    }
}

function persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token', '')
    if (!token) return
    axios.defaults.headers.Authorization = `Bearer ${token}`
}

function* registerRequest({ payload }) {
    const { name, email, login, id } = payload

    try {
        if (id) {
            yield call(axios.put, '/users', {
                email,
                name,
                login: login.password || undefined,
            })

            toast.success('Conta alterada com sucesso.')
            yield put(actions.registerUpdatedSuccess({ name, email, login }))
        } else {
            yield call(axios.post, '/users', {
                email,
                name,
                login: login.password,
            })

            toast.success('Conta criada com sucesso.')
            yield put(actions.registerCreatedSuccess({ name, email, login }))
            history.push('/login')
        }
    } catch (e) {
        const errors = get(e, 'response.data.errors', [])
        const status = get(e, 'response.status', 0)

        if (status === 401) {
            toast.error('Você precisa fazer login.')
            yield put(actions.loginFailure())
            return history.push('/login')
        }

        if (errors.length > 0) {
            errors.map((error) => toast.error(error))
        } else {
            toast.error('Erro desconhecido')
        }

        yield put(actions.registerFailure())
    }
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
])
