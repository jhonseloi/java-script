// Let tem escopo de bloco { ...bloco }
// Var só tem escopo de função

const verdadeira = true

let nome = 'Luiz' // criando variável 
var nome2 = 'Luiz'

if (verdadeira) {
    let nome = 'José' // criando nova variável
    console.log(nome, nome2)

    if (verdadeira) {
        let nome = 'João'
        console.log(nome, nome2)

        if (verdadeira) {
            var nome2 = 'Silva'
            console.log(nome, nome2) // Se não for criada uma variável let neste bloco, o JS irá procurar uma variável com o mesmo nome no escopo do bloco maior
        }
    }
}

console.log(nome, nome2) // Ao contrário de let, var é redeclarada
