const data = new Date('2000-07-23 12:15:37')
const dia = data.getDay()
const diaSemana = diaSemanaTexto(dia)

function diaSemanaTexto(dia) {
    let diaSemana 

    switch (dia) {
        case 0:
            diaSemana = 'Domingo'
            return diaSemana
        case 1:
            diaSemana = 'Segunda'
            return diaSemana
        case 2:
            diaSemana = 'Terça'
            return diaSemana
        case 3:
            diaSemana = 'Quarta'
            return diaSemana
        case 4:
            diaSemana = 'Quinta'
            return diaSemana
        case 5:
            diaSemana = 'Sexta'
            return diaSemana
        case 6:
            diaSemana = 'Sábado'
            return diaSemana
    }
}

console.log(dia, diaSemana)
