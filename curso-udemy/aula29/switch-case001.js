// Switch é utilizado quando muitos valores são atribuídos a uma variável

const data = new Date('2000-07-23 12:15:37')
const dia = data.getDay()
let diaSemana

switch (dia) {
    case 0:
        diaSemana = 'Domingo'
        break
    case 1:
        diaSemana = 'Segunda'
        break
    case 2:
        diaSemana = 'Terça'
        break
    case 3:
        diaSemana = 'Quarta'
        break
    case 4:
        diaSemana = 'Quinta'
        break
    case 5:
        diaSemana = 'Sexta'
        break
    case 6:
        diaSemana = 'Sábado'
        break
    default:
        diaSemana = ''
}

console.log(dia, diaSemana)
