function contador() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')
    if (Number(inicio.value) == 0 || Number(fim.value) <= inicio.value) {
        res.innerHTML = ('<strong>Impossível contar!</strong>')
    } else if (Number(passo.value) == 0) {
        window.alert('[ERRO]O passo só pode ser dado a partir de 1!')
    } else {
        for (c = Number(inicio.value); c <= Number(fim.value); c+= Number(passo.value)) {
            res.innerHTML = (`${contagem}`)
        }
    }
}