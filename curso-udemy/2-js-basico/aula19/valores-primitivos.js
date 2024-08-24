/*
Valores primitivos (imutáveis) -> string, number, boolean, underfined, null, bigint, symbol
*/

let a = 'A'
let b = a // Valor B copiado de A
console.log(a, b)

// A e B são variáveis independentes: quando A altera seu valor, B não é modificado e continua com o mesmo valor anterior de A
a = 'Outra coisa'
console.log(a, b)
