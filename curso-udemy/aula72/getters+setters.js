// Getter e setter com função construtora
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function() {
            return estoquePrivado
        }, set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Não é um número')
            }
            estoquePrivado = valor
        }
    })
}
const pessoa1 = new Produto('Camiseta', 20, 3)
pessoa1.estoque = 500
console.log(pessoa1)
console.log(pessoa1.estoque)

// Getter e setter com factory function
function criaProduto() {
    return {
        get nome() {
            return nome
        }, 
        set nome(valor) {
            valor = valor.replace(' X', '')
            nome = valor
        }
    }
}
const pessoa2 = criaProduto('Camiseta')
pessoa2.nome = 'Produto X'
console.log(pessoa2.nome)
