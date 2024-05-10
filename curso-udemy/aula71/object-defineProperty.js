function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave (V /F)
        value: estoque, // valor
        writable: true, // alterar valor (V / F)
        configurable: true // deletar ou configurar (V / F)
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 500
console.log(p1)
console.log(Object.keys(p1))

const p2 = new Produto('Camiseta', 20, 3)
delete p2.estoque
console.log(p2)
