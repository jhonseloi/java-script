import * as types from '../types'

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
                ...initialState,
            }

        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        default:
            return state
    }
}
