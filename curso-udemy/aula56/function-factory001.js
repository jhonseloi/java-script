// Factory function (função fábrica)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        fala(assunto) {
            return `${this.nome} ${this.sobrenome} está falando ${assunto}`
        },

        altura, 
        peso,

        imc() {
            const indiceMC = peso / (altura * altura)
            return `O IMC de ${this.nome} ${this.sobrenome} é ${indiceMC.toFixed(2)}`
        }
    } 
}

const pessoa = criaPessoa('João', 'Silva', 1.74, 80)
console.log(pessoa.fala('sobre JS'))
console.log(pessoa.imc())
