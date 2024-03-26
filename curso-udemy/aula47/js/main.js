function relogio() {
    const relogio = document.querySelector('.relogio')
    let segundos = 0
    let intervalo

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000)
        const horas = data.getUTCHours()
        const minutos = data.getMinutes()
        const segundosFormatados = data.getSeconds()
    
        return `${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundosFormatados < 10 ? '0' + segundosFormatados : segundosFormatados}`
    }
    
    function iniciaRelogio() {
        intervalo = setInterval(function() {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos(segundos)
        }, 1000)
    }
    
    document.addEventListener('click', function(evento) {
        const elemento = evento.target
    
        if (elemento.classList.contains('iniciar')) {
            clearInterval(intervalo)
            iniciaRelogio()
        }
    
        if (elemento.classList.contains('pausar')) {
            clearInterval(intervalo)
            relogio.classList.add('pausado')
        }
    
        if (elemento.classList.contains('zerar')) {
            clearInterval(intervalo)
            segundos = 0
            relogio.innerHTML = '00:00:00'
        }

        if (elemento.classList.contains('iniciar') || elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
        }
    })
}
relogio()
