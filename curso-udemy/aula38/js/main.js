const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor

for (let p of ps) {
    p.style.background = backgroundColorBody
    p.style.color = 'white'
    p.style.padding = '0px 5px'
}
