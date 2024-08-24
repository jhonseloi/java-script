/*
Incremento = ++
Decremento = --
*/

let contador = 1
console.log(contador++) // Pós incremento/decremento: primeiro executa a variável e depois incrementa/decrementa o valor, o que faz a diferença de valor não aparecer na saída do console.
console.log(contador)

let contador2 = 1 
console.log(++contador2) // Pré incremento/decremento: primeiro incrementa/decrementa o valor e depois executa a variável, mostrando a diferença de valor na saída do console.

let contador3 = 5
contador3++
console.log(contador3) // Esse é o metódo mais aceitado. O método acima não é uma boa prática, pois o incremento/decremento dentro do console pode causar bugs em um código mais complexo.
