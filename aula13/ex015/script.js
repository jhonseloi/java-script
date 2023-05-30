function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (form_ano.value <= 0 || Number(form_ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        form_sex = document.getElementsByName('radsex')
        idade = ano - Number(form_ano.value)
        imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (form_sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 15) {
                // Criança
                imagem.setAttribute('src', '../ex015/imagens/bebe-m.png')
            } else if (idade < 25) {
                // Jovem
                imagem.setAttribute('src', '../ex015/imagens/jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', '../ex015/imagens/adulto-m.png')
            } else {
                // Idoso
                imagem.setAttribute('src', '../ex015/imagens/idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 15) {
                // Criança
                imagem.setAttribute('src', '../ex015/imagens/bebe-f.png')
            } else if (idade < 25) {
                // Jovem
                imagem.setAttribute('src', '../ex015/imagens/jovem-f.png')
            } else if (idade < 50) {
                // Adulta
                imagem.setAttribute('src', '../ex015/imagens/adulto-f.png')
            } else {
                // Idosa
                imagem.setAttribute('src', '../ex015/imagens/idoso-f.png')
            }        
        }
    }
    res.innerHTML = `<strong>Detecmanos:</strong> ${genero} de ${idade} anos.`
    res.style.textAlign = 'center'
    res.appendChild(imagem)
}