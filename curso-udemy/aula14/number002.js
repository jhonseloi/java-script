let num1 = 21
let num2 = 15.163763833836

console.log(num1.toString(2)) // Cria número binário
console.log(num2.toFixed(2)) // Arredonda as casas decimais
console.log(Number.isInteger(num1)) // Responde se é um número inteiro
console.log(Number.isInteger(num2))

let temp1 = num1 * 'Ola'
let temp2 = num1 * '5'
console.log(Number.isNaN(temp1)) // Responde se um número é inválido
console.log(Number.isNaN(temp2))
