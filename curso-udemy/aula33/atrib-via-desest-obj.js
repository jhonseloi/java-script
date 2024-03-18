const pessoa = {
    nome: 'José',
    sobrenome: 'Sousa', 
    idade: 60,
    endereco: {
        rua: 'Av Brasil',
        numero: 115
    }
}

const { nome: n, sobrenome: s} = pessoa // Atribuindo novo nome à variável dentro do objeto
console.log(n, s)

const { nome, sobrenome, ...resto } = pessoa // Operador rest
console.log(resto)

const { endereco: {rua, numero} } = pessoa // Desestruturando um objeto dentro de outro objeto
console.log(rua)
console.log(numero)
