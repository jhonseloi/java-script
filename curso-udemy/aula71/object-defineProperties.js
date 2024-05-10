function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true 
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: true 
        },
        estoque: {
            enumerable: true, 
            value: estoque, 
            writable: true, 
            configurable: true 
        }
    })
}

const p = new Produto('Camiseta', 20, 3)
p.preco = 50
console.log(p)
