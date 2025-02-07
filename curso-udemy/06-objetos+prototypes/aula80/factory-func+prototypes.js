const falar = {
    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando.`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} ${this.sobrenome} está comendo.`)
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} ${this.sobrenome} está bebendo.`)
    }
}

const pessoaProtoype = {...falar, ...comer, ...beber}

criaPessoa = (nome, sobrenome) => {
    return Object.create(pessoaProtoype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Maria', 'Alice')
const p2 = criaPessoa('Eder', 'Luiz')
