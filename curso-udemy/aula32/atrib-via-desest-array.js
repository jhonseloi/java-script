const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [um, dois, tres, ...resto] = numeros // ... -> rest, operador que captura o resto dos valores
console.log(um, dois, tres)
console.log(resto)

const [one, , three, , five, , seven, , none] = numeros // spread
console.log(one, three, five, seven, none)

//                0          1           2         = Número da lista 
//             0  1  2    0  1  2    0  1  2       = Número do índice da lista
const num = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(num[1][1]) // Chamando o valor 5
const [lista1, lista2, lista3] = num
console.log(lista2[1]) // Chamando o valor 5, agora com atribuição via desestruturação
