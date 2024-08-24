export const nome = 'Paulo'
export const sobrenome = 'Andrade'
export const idade = 30

export function soma(x, y) {
    return x + y
}

const cpf = '777.777.777-77' // atributo privado

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}
