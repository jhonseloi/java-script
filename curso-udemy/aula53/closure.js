function retornaFuncao(nome) {
    return function() {
        return nome
    }
}

const funcao = retornaFuncao('Luis')

console.dir(funcao) // Conferir quantidade de escopos no DevTools
console.log(funcao())
