const initialState = {
    botaoClicado: false,
}

export default function (state = initialState, action) {
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
