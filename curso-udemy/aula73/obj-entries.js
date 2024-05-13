// Object.entries (retorna as chaves e os valores)
const produto = { nome: 'Produto', preco: 2.1 }
console.log(Object.entries(produto))

for (let [objeto, chave] of Object.entries(produto)) {
    console.log(objeto, chave)
}
