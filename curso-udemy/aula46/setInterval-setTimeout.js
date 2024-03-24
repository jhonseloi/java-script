function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const tempo = setInterval(function() {
    console.log(mostraHora())
}, 1000)

setTimeout(function() {
    clearInterval(tempo)
}, 4000)

setTimeout(function() {
    console.log('É hora de morfar!')
}, 4100)
