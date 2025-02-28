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
                state: action.payload.user,
            }

        case types.LOGIN_FAILURE:
            return {
                ...initialState,
            }

        default:
            return state
    }
}
