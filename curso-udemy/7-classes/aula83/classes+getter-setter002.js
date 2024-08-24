class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

const p = new Pessoa('José', 'Maria')
p.nomeCompleto = 'José Maria Gimenez'
console.log(p.nome)
console.log(p.sobrenome)
console.log(p.nomeCompleto)
