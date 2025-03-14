import * as types from '../types'
import axios from '../../../services/axios'

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
                user: action.payload.user,
                isLoading: false,
            }

        case types.LOGIN_FAILURE:
            return {
                delete: axios.defaults.headers.Authorization,
                ...initialState,
            }

        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case types.REGISTER_UPDATED_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                isLoading: false,
            }

        case types.REGISTER_CREATED_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }

        case types.REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
            }

        case types.REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        default:
            return state
    }
}
