function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

const pessoa1 = new Pessoa('Thiago', 'Neves')
pessoa1.sobrenome = 'Ribeiro'
console.log(pessoa1)

const pessoa2 = new Pessoa('Everton', 'Ribeiro')
Object.freeze(pessoa2)
pessoa2.nome = 'Thiago'
console.log(pessoa2)
