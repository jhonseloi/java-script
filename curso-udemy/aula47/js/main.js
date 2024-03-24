const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let intervalo
let segundos = 0

function atualizarRelogio() {
    const tempo = new Date(segundos * 1000)
    const horas = tempo.getUTCHours()
    const minutos = tempo.getMinutes()
    const segundosFormatados = tempo.getSeconds()

    const tempoFormatado = `${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundosFormatados < 10 ? '0' + segundosFormatados: segundosFormatados}`
    relogio.innerHTML = tempoFormatado
    relogio.style.color = 'black'
}

function iniciarCronometro() {
    intervalo = setInterval(function() {
        segundos++
        atualizarRelogio()
    }, 1000)
}

iniciar.addEventListener('click', function() {
    iniciarCronometro()
})

pausar.addEventListener('click', function() {
    clearInterval(intervalo)
    relogio.style.color = 'red'
})

zerar.addEventListener('click', function() {
    clearInterval(intervalo)
    segundos = 0
    atualizarRelogio()
})
