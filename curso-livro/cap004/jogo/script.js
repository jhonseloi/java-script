let res = document.querySelector('div#res')
let n_random = Math.round(Math.random() * 10)

function tentativa1() {
    res.innerHTML = '<label for="tentativa1"><strong>1ª TENTATIVA</strong></label>'
    res.innerHTML += '<p><input type="number" name="tentativa1" id="tentativa1" min="0" max="10"> <input type="button" value="OK" onclick="res1()"></p>'
}

function tentativa2() {
    res.innerHTML = '<label for="tentativa2"><strong>2ª TENTATIVA</strong></label>'
    res.innerHTML += '<p><input type="number" name="tentativa2" id="tentativa2" min="0" max="10"> <input type="button" value="OK" onclick="res2()"></p>'
}

function tentativa3() {
    res.innerHTML = '<label for="tentativa2"><strong>3ª TENTATIVA</strong></label>'
    res.innerHTML += '<p><input type="number" name="tentativa3" id="tentativa3" min="0" max="10"> <input type="button" value="OK" onclick="res3()"></p>'
}

function res1() {
    let tenttv1 = document.querySelector('input#tentativa1')
    let t1 = tenttv1.value
    if (t1 == n_random) {
        res.innerHTML = `Você acertou, pois eu pensei em ${n_random}.`
    } else if (t1 > 10) {
        tentativa1()
    } else {
        tentativa2()
        if (t1 > n_random) {
            res.innerHTML += `<p>Você errou!</p><p>O primeiro chute (${t1}) foi um número MAIOR do que eu pensei.</p>`
        } else {
            res.innerHTML += `<p>Você errou!</p><p>O primeiro chute (${t1}) foi um número MENOR do que eu pensei.</p>`
        }
    }
}

function res2() {
    let tenttv2 = document.querySelector('input#tentativa2')
    let t2 = tenttv2.value
    if (t2 == n_random) {
        res.innerHTML = `Você acertou, pois eu pensei em ${n_random}.`
    } else if (t2 > 10) {
        tentativa2()
    } else {
        tentativa3()
        if (t2 > n_random) {
            res.innerHTML += `<p>Você errou!</p><p>O segundo chute (${t2}) foi um número MAIOR do que eu pensei.</p>`
        } else {
            res.innerHTML += `<p>Você errou!</p><p>O segundo chute (${t2}) foi um número MENOR do que eu pensei.</p>`
        }
    }
}

function res3() {
    let tenttv3 = document.querySelector('input#tentativa3')
    let t3 = tenttv3.value
    if (t3 == n_random) {
        res.innerHTML = `Você acertou, pois eu pensei em ${n_random}.`
    } else if (t3 > 10) {
        tentativa3()
    } else {
        if (t3 > n_random) {
            res.innerHTML = `<p>O último chute (${t3}) foi um número MAIOR do que eu pensei.<p><p>Você errou todas as tentativas!</p>`
            res.innerHTML += '<input type="button" value="Recomeçar o jogo" onclick="tentativa1()">'
        } else {
            res.innerHTML = `<p>O último chute (${t3}) foi um número MENOR do que eu pensei.<p><p>Você errou todas as tentativas!</p>`
            res.innerHTML += '<input type="button" value="Recomeçar o jogo" onclick="tentativa1()">'
        }
    } 
}