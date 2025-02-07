const velocidade = Symbol('velocidade') // Atributo (velocidade) privado

class Carro {
    constructor(nome) {
        this.nome = nome
        this[velocidade] = 0
    }

    acelerar() {
        if (this[velocidade] >= 100) return
        this[velocidade]++
    }

    desacelerar() {
        if (this[velocidade] <= 0) return
        this[velocidade]--
    }

    // Método (velocidade) público
    set velocidade(valor) {
        if (typeof valor !== 'number') return
        if (valor >= 100 || valor <= 0) return
        this[velocidade] = valor
    }
    
    get velocidade() {
        return this[velocidade]
    }
}

const c = new Carro('Fiat Palio')
for (let i = 0; i <= 200; i++) {
    c.acelerar()
}
console.log(c.velocidade)

c.velocidade = 66 // Retorna setter
c.velocidade = 'abc' //    " "
c.velocidade = 1000 //     " "
c.velocidade = -1 //       " "
console.log(c.velocidade) // Retorna getter
