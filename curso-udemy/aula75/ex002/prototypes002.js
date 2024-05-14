function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100)) 
}

Produto.prototype.aumento = function(percentual) {
    this.preco =  this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)
p1.desconto(50)
console.log(p1)

const p2 = new Produto('Camiseta', 50)
p2.aumento(100)
console.log(p2)

// Método literal
const p3 = {
    nome: 'Caneca',
    preco: 50
}

Object.setPrototypeOf(p3, Produto.prototype)
p3.desconto(10)
console.log(p3)

// Setando prototype na criação do objeto
const p4 = Object.create(Produto.prototype)
p4.preco = 90
p4.aumento(10)
console.log(p4)

const p5 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 99
    }
})

p5.aumento(10)
console.log(p5)
