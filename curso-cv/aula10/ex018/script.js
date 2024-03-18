let num = document.querySelector('input#form_num')
let lista = document.querySelector('select#form_lista')
let res = document.querySelector('div#res')
let valores = []

function Numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function Lista(n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (Numero(num.value) && !Lista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        lista.appendChild(item)
        item.innerHTML = `Valor ${num.value} adicionado.`
        for (let pos in c = 1) {
            item.value = `lista ${c[pos]}`
        }
        num.value = ''
        num.focus()
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for (posicao in valores) {
            soma += valores[posicao]
            if (valores[posicao] < menor) {
                menor = valores[posicao]
            }
            if (valores[posicao] > maior) {
                maior = valores[posicao]
            }
        }
        media = soma / total
        res.innerHTML = `<p>Ao todo, temos ${total} valores cadastrados.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}