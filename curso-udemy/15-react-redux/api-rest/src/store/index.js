import { legacy_createStore } from 'redux'

const initialState = {
    botaoClicado: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOTAO_CLICADO':
            return {
                ...state,
                botaoClicado: !state.botaoClicado,
            }

        default:
            return state
    }
}

const store = legacy_createStore(reducer)

export default store
