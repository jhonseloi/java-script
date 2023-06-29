let num = [3, 1, 5, 2, 4]
num.sort()
num.push(6)
num[5] = 0
console.log(`Os valores do vetor são ${num}.`)
console.log(`O vetor possui ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
for (let posicao in num) {
    console.log(`A posição ${posicao} possui o valor ${num[posicao]}.`)
}
let pos1 = num.indexOf(8)
if (pos1 == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos1}.`)
}
let pos2 = num.indexOf(3)
if (pos2 == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 3 está na posição ${pos2}.`)
}