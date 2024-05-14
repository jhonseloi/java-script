function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    // this.nomeCompleto = () => `ORIGINAL: ${this.nome} ${this.sobrenome}`
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// instâncias
const pessoa1 = new Pessoa('Amadeu', 'Jucá')
const pessoa2 = new Pessoa('Ana', 'Maria')
const data = new Date()

console.dir(pessoa1)
console.dir(pessoa2)
console.dir(data)
