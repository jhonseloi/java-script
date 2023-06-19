function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')
    if (inicio.value == 0 || fim.value == 0 || ) {
        res.innerHTML = 'Impossível contar...'
    } else {
        res.innerHTML = 'Contando: <br>'
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value) 
        if (p <= 0) {
            p = 1
            window.alert('Passo inválido! Considere a partir do PASSO 1')
        } else if (i < f) {
            for (c = 1; c <= f; c += p) {
                res.innerHTML += `${c}\u{1F449} `
            }
        } else {
            for (c = 1; c >= f; c -= p) {
                res.innerHTML += `${c}\u{1F449} `
            }
        }
    }
    res.innerHTML += '\u{1F3C1}'
}