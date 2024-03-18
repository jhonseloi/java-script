function nascimento() {
    data = new Date()
    ano = data.getFullYear()
    form_ano = document.getElementById('txtano')
    res = document.getElementById('res')

    if (form_ano.value == 0 || form_ano.value < 1900 || Number(form_ano.value) > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        form_sex = document.getElementsByName('sexo')
        idade = ano - Number(form_ano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (form_sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                // Criança M
                img.setAttribute('src', '../ex015/imagens/bebe-m.png')
            } else if (idade > 12 && idade < 25) {
                // Jovem M
                img.setAttribute('src', '../ex015/imagens/jovem-m.png')
            } else if (idade > 25 && idade < 50) {
                // Adulto M
                img.setAttribute('src', '../ex015/imagens/adulto-m.png')
            } else {
                // Idoso M
                img.setAttribute('src', '../ex015/imagens/idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                // Criança F
                img.setAttribute('src', '../ex015/imagens/bebe-f.png')
            } else if (idade > 12 && idade < 25) {
                // Jovem F
                img.setAttribute('src', '../ex015/imagens/jovem-f.png')
            } else if (idade > 25 && idade < 50) {
                // Adulto F
                img.setAttribute('src', '../ex015/imagens/adulto-f.png')
            } else {
                // Idoso F
                img.setAttribute('src', '../ex015/imagens/idoso-f.png')
            }
        }
    }

    res.innerHTML = (`<strong>Detectamos:</strong> ${genero} de ${idade} anos.`)
    res.appendChild(img)
    res.style.textAlign = 'center'
}