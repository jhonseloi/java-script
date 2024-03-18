// Índice ->     0123456789
let umaString = "O rato roeu a roupa do rei de Roma."

console.log(umaString.slice(2, 6)) // Pega um grupo de caracteres a partir da posição inicial e final dentro do índice
console.log(umaString.slice(-5)) // Pega os últimos 4 caracteres da string
console.log(umaString.slice(-5, -1)) // É o mesmo que o tamanho da string - 1, ou seja, elimina o último caractere da string (no caso o .) e pega os outros caracteres finais indicados

console.log(umaString.split('r')) // Separa a string a partir da eliminação de um caractere indicado
console.log(umaString.split(' ', 3)) // Faz o mesmo, mas estabelece o limite de separação

console.log(umaString.toUpperCase()) // Transforma todos os caracteres em MAIÚSCULAS
console.log(umaString.toLowerCase()) // Transforma todos os caracteres em minúsculas
