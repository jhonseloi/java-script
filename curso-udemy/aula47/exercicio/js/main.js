const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let segundos = 0
let intervalo

function atualizarRelogio() {
    const data = new Date(segundos * 1000)
    const horas = data.getUTCHours()
    const minutos = data.getMinutes()
    const segundosFormatados = data.getSeconds()

    relogio.innerHTML = `${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundosFormatados < 10 ? '0' + segundosFormatados : segundosFormatados}`
    relogio.style.color = 'black'
}

iniciar.addEventListener('click', function() {
    intervalo = setInterval(function() {
        segundos++
        atualizarRelogio()
    }, 1000)
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
