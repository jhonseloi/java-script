const nome = prompt('Digite o seu nome completo:')

document.body.innerHTML = `<p>Seu nome é <strong>${nome}</strong>.</p>`
document.body.innerHTML += `<p>Seu nome tem <strong>${nome.length - nome.split(' ').length + 1}</strong> letras.</p>`
document.body.innerHTML += `<p>A segunda letra do seu nome é <strong>${nome[1]}</strong>.</p>`
document.body.innerHTML += `<p>O primeiro indíce da letra O no seu nome é <strong>${nome.indexOf('o')}</strong>.</p>`
document.body.innerHTML += `<p>O último índice da letra O no seu nome é <strong>${nome.lastIndexOf('o')}</strong>.</p>`
document.body.innerHTML += `<p>As últimas 3 letras do seu nome são <strong>${nome.slice(-3)}</strong>.</p>`
document.body.innerHTML += `<p>As palavras do seu nome são <strong>${nome.split(' ')}</strong>.</p>`
document.body.innerHTML += `<p>Seu nome com letras minúsculas é <strong>${nome.toUpperCase()}</strong>.</p>`
document.body.innerHTML += `<p>Seu nome com letras maiúsculas é <strong>${nome.toLowerCase()}</strong>.</p>`
