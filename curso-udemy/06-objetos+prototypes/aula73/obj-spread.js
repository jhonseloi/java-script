// Operador spread (copia valor de objeto para outro, sem referenciar os dois)
const produto = { nome: 'Produto', preco: 2.1 }
console.log(produto)

const caneca = { ...produto, material: 'porcelana' }
caneca.nome = 'Caneca'
caneca.preco = 1.5
console.log(caneca)
