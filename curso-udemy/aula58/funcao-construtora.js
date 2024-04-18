// Função construtora -> constrói objetos
// Função fábrica -> fabrica objetos
// Contrutora -> Function (new) | Por convenção, sempre começa com letra maiúscula

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos PRIVADOS
    const id = 12345
    const metodoInterno = function() {
        console.log(`${this.nome}: sou um método`)
    }

    // Atributos ou métodos PÚBLICOS
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(`${this.nome}: sou um método`)
    }
}

const p1 = new Pessoa('Luiz', 'Carvalho')
const p2 = new Pessoa('Maria', 'Sabino')
p1.metodo()
p2.metodo()
