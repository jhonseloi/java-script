const numTitulo = document.querySelector('span#numero-titulo')
const res = document.querySelector('div#res')
const num = Number(prompt('Digite um número:'))

numTitulo.innerHTML = `${num}`
res.innerHTML = `<p>Raiz quadrada: <strong>${num ** 0.5}</strong></p>`
res.innerHTML += `${num} é inteiro: <strong>${Number.isInteger(num)}</strong>`
res.innerHTML += `<p>É NaN: <strong>${Number.isNaN(num)}</strong></p>`
res.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(num)}</strong></p>`
res.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(num)}</strong></p>`
res.innerHTML += `<p>Com duas casas decimais: <strong>${num.toFixed(2)}</strong></p>`
