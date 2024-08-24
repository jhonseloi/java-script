criaPessoa = (nome, sobrenome) => {
    return {
        nome,
        sobrenome,
        
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        } 
    }
}

const pessoa = criaPessoa('Luiz', 'Aragão')
console.log(pessoa.nomeCompleto)
