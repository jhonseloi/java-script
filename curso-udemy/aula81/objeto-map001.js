const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
]

const novasPessoas = {}
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas[id] = { ...pessoa }
}

console.log(novasPessoas) // Sem o uso do objeto Map, a ordem original das chaves não é mantida
