const res = document.querySelector('#resultado')
const data = new Date()

res.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})
