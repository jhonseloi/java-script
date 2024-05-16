function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
Camiseta.prototype.aumento = function(percentual) { // Sobescrevendo o prototype original (aumento)
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco) 
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        }, 
        set: function(valor) {
            if (typeof valor !== 'number') return
            estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('Genérico', 100)
produto.desconto(50)
console.log(produto)

const camiseta = new Camiseta('Regata', 7.5, 'Preta')
camiseta.aumento(100)
console.log(camiseta)

const caneca = new Caneca('Caneca', 20, 'porcelana')
caneca.aumento(5)
caneca.estoque = 10
console.log(caneca, caneca.estoque)
