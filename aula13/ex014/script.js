function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = (`Agora são ${hora} horas.`)

    if (hora >= 0 && hora < 6 || hora >= 18) {
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    } else if (hora >= 6 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else {
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }
}
