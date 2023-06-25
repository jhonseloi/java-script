let num = [3, 2, 5, 8]
num[1] = 1
num.sort()
num.push(0)
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
let posicao = num.indexOf(8)
if (posicao == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${posicao}.`)
}