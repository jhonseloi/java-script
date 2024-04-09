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
console.log(pessoa.nomeCompleto)
