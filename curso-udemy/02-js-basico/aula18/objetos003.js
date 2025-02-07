// Chamando função dentro de um objeto

const pessoa = {
    nome: 'Alberto',
    sobrenome: 'Moreno', 
    idade: 21,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos e está falando oi.`)
    },

    incrementaIdade() {
        this.idade++
    }
}

pessoa.incrementaIdade()
pessoa.fala()
