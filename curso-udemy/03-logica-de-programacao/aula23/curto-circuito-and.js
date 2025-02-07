/*
&& -> true && true = true (o valor mesmo)

FALSY (valores que são avaliados como falso em JS):
** false
** 0
** ' ' " " ` `
** null / undefined
** NaN
*/

console.log('Luiz' && 'Maria' && 'João') // Retorna o último valor true
console.log('Luiz' && NaN && 'João') // Retorna o valor false

function falaOi() {
    return 'Oi'
}

let executar = 0
console.log(executar && falaOi) // Retorna o valor false (0)

executar = 'Tiago'
console.log(executar && falaOi) // Retorna o último valor true (Oi)
