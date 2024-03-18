// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 1000
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'
console.log(nivelUsuario)

let corUsuario = null
let corPadrao = corUsuario || 'Preto'
console.log(corPadrao) // Mostra apenas a única condição verdadeira (Preto)

corUsuario = 'Pink'
corPadrao = corUsuario || 'Preto'
console.log(corPadrao) // Mostra a primeira condição verdadeira (Pink)
