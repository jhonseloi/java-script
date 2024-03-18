const verdadeira = true
var nome = 'Soares'

function falaNome() {
    console.log(nome) // var declarada fora da função aparece dentro dela
    var nome2 = 'Gomes' // var declarada dentro da função não aparece fora da mesma

    if (verdadeira) {
        console.log(nome2)
    }
}

falaNome()

function falaSobrenome() {
    if (verdadeira) {
        let nome = 'Luiz'
        console.log(nome) // vai buscar o let declarado dentro do bloco
    }
    console.log(nome) // vai buscar o let declarado no escopo do bloco maior (no caso, o geral)
}

falaSobrenome()
