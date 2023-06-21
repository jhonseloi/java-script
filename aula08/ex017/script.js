function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            tab.appendChild(item)
            item.innerHTML = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
        }
    }
} 