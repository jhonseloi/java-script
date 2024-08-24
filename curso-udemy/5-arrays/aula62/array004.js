//                0         1        2        
const nomes = ['Tiago', 'Marcelo', 'Ana']
console.log(nomes)

nomes.unshift('Elisa') // adiciona item ao índice 0
nomes.push('Rafael') // adiciona item ao último índice
console.log(nomes)

const nomes2 = nomes.slice(1, -2) // recorte de itens a partir da indicação das posições (inicial e final) no índice
console.log(nomes2)
