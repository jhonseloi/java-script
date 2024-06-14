// Atrelando métodos sem prototype
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando.`)
    }
}

const p1 = new Pessoa('Mats', 'Hummels')
const p2 = new Pessoa('Marco', 'Reus')
const p3 = new Pessoa('Mario', 'Gotze')
const p4 = new Pessoa('Robert', 'Lewandowski')
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
