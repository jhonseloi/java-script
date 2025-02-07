// Object.assign (copia valor de um objeto para outro, sem referenciar os dois) 
const produto = {nome: 'Produto', preco: 2.1}
console.log(produto)

const caneca = Object.assign({}, produto, {material: 'porcelana'})
caneca.nome = 'Caneca'
caneca.preco = 1.5
console.log(caneca)
