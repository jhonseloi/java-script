function tabuada() {
    var tab = document.getElementById('txttab')
    var res = document.getElementById('res')
    var n = Number(tab.value)
    res.innerHTML = ''
    for (t = 1; t <= 10; t++) {
        var m = n * t
        res.innerHTML += `${n} x ${t} = ${m}<br>`
    }
}