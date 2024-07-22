// Fetch API
document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href')
        const response = await fetch(href)
        
        if (response.status !== 200) throw new Error('ERROR 404')
        
        const html = await response.text()
        carregaResultado(html)
    } catch(e) {
        alert(e)
        console.error(e)
        paginaErro(e)
    }
}

const resultado = document.querySelector('.resultado')

function carregaResultado(response) {
    resultado.innerHTML = response
}

function paginaErro() {
    resultado.innerHTML = ''
}
