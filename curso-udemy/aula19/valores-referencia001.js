/*
Valores por referência (mutáveis) -> array, object, function
*/

let a = [1, 2, 3]
let b = a // Valor de B recebe a mesma referência de valor de A
console.log(a, b) 

// A e B estão com valores linkados no mesmo local da memória do JS. Por isso, quando uma dessas variáveis muda, a outra também muda da mesma forma
a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)

let c = b
c.unshift(0)
console.log(a, b, c)

b = [...a] // Dessa forma B fica com valor totalmente independente de A
a.push(4)
console.log(a, b, c)
