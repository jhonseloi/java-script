function numero() {
    let num = document.getElementById('txtnum')
    let form = document.getElementById('txtform')
    if (num.value == 0 || num.value > 100) {
        return alert('Valor inválido ou já encontrado na lista.') 
    } else {
        num = Number(num.value)
        form.innerHTML += ''
        let item = document.createElement('option')
        form.appendChild(item)
        item.innerHTML = `Valor ${num} adicionado.`
    }
}

/* 
function finalizar() {
    resp = document.getElementById('res')
    let n = [num]
    n.sort()
    resp.innerHTML = `<p>Ao todo, temos ${n.length} números cadastrados.</p>`
    resp.innerHTML += `<p>O maior valor informado foi ${n.push}.</p>`
    resp.innerHTML += `<p>O menor valor informado foi ${n[0]}.</p>`
    resp.innerHTML += `<p>Somando todos os valores, temos ${}.</p>`
    resp.innerHTML += `<p>A média dos valores digitados ${}.</p>`
}
*/
