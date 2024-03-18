const pessoa = {
    nome: 'João', 
    sobrenome: 'Carlos',
    idade: `${30} anos`
}

for (let chave in pessoa) {
    console.log(pessoa[chave])
}
