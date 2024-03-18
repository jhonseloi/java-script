// Valores por referência com objetos

const a = {
    nome: 'José',
    sobrenome: 'Santos'
}

const b = a
a.nome = 'Mateus'
console.log(a)
console.log(b)

const c = {...a}
c.nome = 'Tiago'
console.log(a)
console.log(c)
