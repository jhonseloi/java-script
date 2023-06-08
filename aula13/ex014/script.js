/* 
CORES:
Manhã -> #e2cd9f
Tarde -> #b9846f
Noite -> #515154
*/

function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var msg = document.getElementById('msg')
    var imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    
    if (hora >= 0 && hora < 6 || hora >= 18) {
        imagem.setAttribute('src', '../ex014/imagens/fotonoite.png')
        document.body.style.background = '#515154'
    } else if (hora >= 6 && hora < 12) {
        imagem.setAttribute('src', '../ex014/imagens/fotomanha.png')
        document.body.style.background = '#e2cd9f'
    } else {
        imagem.setAttribute('src', '../ex014/imagens/fototarde.png')
        document.body.style.background = '#b9846f'
    }

    msg.innerHTML = (`Agora são ${hora} horas.`)
    img.appendChild(imagem)
}