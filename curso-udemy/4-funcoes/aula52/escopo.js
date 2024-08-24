const nome = 'Renan'

function falaNome() {
    console.log(nome) // Chama a variável (nome) declarada no escopo global
}

function usaFalaNome() {
    falaNome() // Chama a variável (nome) declarada no escopo da função pai
    const nome = 'Omar'
    console.log(nome) // Exibe a variável (nome) declarada no escopo dessa função
}

usaFalaNome()
