function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const pessoa = criaPessoa('Luiz', 'Otávio')
console.log(pessoa.nome)
console.log(pessoa.sobrenome)

pessoa.nomeCompleto = 'Maria Ferreira Silva' // Muda o valor atribuído a variável pessoa
console.log(pessoa.nome) // Graças ao this, recebe um novo valor atribuído no método nomeCompleto
console.log(pessoa.sobrenome) // Graças ao this, recebe um novo valor atribuído no método nomeCompleto
console.log(pessoa.nomeCompleto) // Retorna a junção de nome e sobrenome e seus novos valores
