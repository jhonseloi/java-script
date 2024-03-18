let amigo = {nome: 'José',
sexo: 'M',
peso: 85,
engordar(p=0) {
    console.log('Engordou!')
    this.peso += p
}
}

amigo.engordar(5)
console.log(`${amigo.nome} é do sexo ${amigo.sexo} e pesa ${amigo.peso}kg.`)