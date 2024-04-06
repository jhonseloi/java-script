function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome }
}

const p1 = criaPessoa('Luiz', 'Peres')
const p2 = {
    nome: 'Luiz',
    sobrenome: 'Perez'
}

console.log(p1.nome, p1.sobrenome, typeof p1)
console.log(p2.nome, p2.sobrenome, typeof p2)
