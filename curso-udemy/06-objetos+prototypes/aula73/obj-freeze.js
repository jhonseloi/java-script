// Object.freeze (congela o objeto)
const produto = { nome: 'Produto', preco: 2.1 }
Object.freeze(produto)
produto.nome = 'Outro nome'
console.log(produto)
