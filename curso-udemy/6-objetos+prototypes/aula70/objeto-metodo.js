const pessoa = {
    nome: 'Ricardo',
    sobrenome: 'Oliveira',
    anoNascimento: 1999
}

pessoa.falaNome = function () {
    return `${this.nome} está falando seu nome.`
}
console.log(pessoa.falaNome())

pessoa.idade = function () {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.anoNascimento
}
console.log(pessoa.idade())

for (let chaves in pessoa) {
    console.log(pessoa[chaves])
}
