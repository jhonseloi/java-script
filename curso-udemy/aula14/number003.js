// IEEE 754-2008 -> Padrão do JavaScript para operações com números decimais
let num1 = 0.7
let num2 = 0.1

num1 += num2 // 1.8
num1 += num2 // 1.9
num1 += num2 // 2.0
console.log(num1) // Incremetação de números decimais com resultado impreciso
console.log(Number.isInteger(num1))

let num3 = 0.7
let num4 = 0.1

num3 += num4 // 1.8
num3 += num4 // 1.9
num3 += num4 // 2.0
num3 = parseFloat(num3.toFixed(2)) // Utilizando funções é possível arredondar a incrementação de números decimais
console.log(num3) 
console.log(Number.isInteger(num3))
