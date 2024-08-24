const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

const geraMaiuscula = () => String.fromCharCode(random(65, 91))
const geraMinuscula = () => String.fromCharCode(random(97, 123))
const geraNumero = () => String.fromCharCode(random(48, 58))
const simbolos = '!@$%¨&*()-_+={[}]`´^~?/|'
const geraSimbolo = () => simbolos[random(0, simbolos.length)]

export default function geraSenha(qtd, mai, min, num, simb) {
    const senhaArray = []
    qtd = Number(qtd)

    for (let i = 0; i < qtd; i++) {
        mai && senhaArray.push(geraMaiuscula())
        min && senhaArray.push(geraMinuscula())
        num && senhaArray.push(geraNumero())
        simb && senhaArray.push(geraSimbolo())
    }
    
    return senhaArray.join('').slice(0, qtd)
}
