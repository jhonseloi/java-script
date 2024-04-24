//                  0         1        2      
const nomes = ['Eduardo', 'Maria', 'Joana']
const nomes1 = nomes
// Valor por referência (se o array cópia muda, aquele referenciado também muda e vice-versa)

const nomes2 = [...nomes] // ... evita que seja refenciado ao array original

nomes.shift() // remove o item do índice 0
nomes1.pop() // remove o item do último índice
console.log(nomes)
console.log(nomes1)
console.log(nomes2)
