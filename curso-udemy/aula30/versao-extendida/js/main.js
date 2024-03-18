const res = document.querySelector('#resultado')
const data = new Date()

function mostraDiaSemana(numeroDia) {
    const diaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    return diaSemana[numeroDia]
}

function mostraMes(numeroMes) {
    const mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mes[numeroMes]
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function dataHora(data) {
    const numeroDia = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = mostraDiaSemana(numeroDia)
    const nomeMes = mostraMes(numeroMes)

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} às ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}

res.innerHTML = dataHora(data)
