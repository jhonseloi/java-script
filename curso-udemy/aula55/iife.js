// IIFE -> Immediatily invoked function expression
(function(idade, altura, peso) {
    const sobrenome = 'Aragão'
    function criaNome(nome) {
        return `${nome} ${sobrenome}`
    }

    function falaNome() {
        console.log(criaNome('Jorge'))
    }

    falaNome()
    console.log(idade, altura, peso)
})('70 anos', 1.74, '75kg')
