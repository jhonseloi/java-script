//Declara~ção de função (Function hoisting)

falaOi()
function falaOi() {
    console.log('Oi')
}

// First-class objetos (objetos de primeira classe)
const souUmDado = function() { // Function expression
    console.log('Sou um dado.')
}
souUmDado()

const executaFuncao = function(funcao) {
    console.log('Vou executar uma função abaixo:')
    funcao()
}
executaFuncao(falaOi)

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function')
}
funcaoArrow()

const obj = {
    falar() {
        console.log('Estou falando...')
    }
}
obj.falar()
