let res = document.querySelector('div#res')
let ano_de_olim = 1896

function olimpiadas() {
    res.innerHTML = ''
    while (ano_de_olim <= 2020) {
        res.innerHTML += `${ano_de_olim} teve Olimpíadas! | `
        ano_de_olim = ano_de_olim + 4
    }
    res.innerHTML += '<hr></hr>'
    res.innerHTML += '<p>Quer saber quais foram as edições a partir de um ano específico, além de quando será as próximas Olimpíadas?</p>'
    res.innerHTML += '<label for="ano_ini">Ano inicial: </label>'
    res.innerHTML += '<input type="number" name="ano_ini" id="ano_ini" min="1896" step="4">'
    res.innerHTML += '<p></p>'
    res.innerHTML += '<label for="ano_lim">Ano final: </label>'
    res.innerHTML += '<input type="number" name="ano_lim" id="ano_lim" min="2024">'    
    res.innerHTML += '<p><input type="button" value="Confirmar" onclick="olimp_pas_fut()"></p>'
}

function olimp_pas_fut() {
    let ano_inicial = document.querySelector('input#ano_ini')
    let anoi = Number(ano_inicial.value)
    let ano_limite = document.querySelector('input#ano_lim')
    let anol = ano_limite.value
    let ano_base = 2024
    res.innerHTML = ''
    while (anoi < ano_base) {
        res.innerHTML += `${anoi} teve Olimpíadas! | `
        anoi = anoi + 4
    }
    res.innerHTML += '<hr></hr>'
    while (ano_base <= anol) {
        res.innerHTML += `${ano_base} terá Olimpíadas! | `
        ano_base = ano_base + 4 
    }
}