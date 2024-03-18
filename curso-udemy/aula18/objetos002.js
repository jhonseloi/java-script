// Função retornando um objeto

function criarPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

const pessoa = criarPessoa('Marcos', 'Oliveira', 28)
console.log(pessoa)
