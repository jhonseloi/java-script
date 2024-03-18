// Índice ->     0123456789
let umaString = "Um texto"
let outraString = "O rato roeu a roupa do rei de Roma"

// Expressões regulares
console.log(umaString.match(/[a-z]/)) // Encontra primeira letra minúscula
console.log(umaString.match(/[a-z]/g)) // Encontra todas as letras minúsculas
console.log(umaString.search(/[a-z]/)) // Mostra a posição no índice da 1ª letra minúscula
console.log(umaString.search(/[t]/)) // Mostra a posição no índice de um caractere específico

console.log(umaString.replace('Um', 'Outro')) // Substituição de caracteres
console.log(outraString.replace(/r/, '#')) // Substitui a 1ª letra R minúscula
console.log(outraString.replace(/r/g, '#')) // Substitui todas as letras R minúsculas
console.log(outraString.length) // Mostra quantidade de caracteres da variável 
