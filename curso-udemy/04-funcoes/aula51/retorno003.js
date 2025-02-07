// Retorno de uma função que está dentro outra função

function falaFrase(comeco) {
    function falaResto(resto) {
        return `${comeco} ${resto}`
    }

    return falaResto
}

const fala = falaFrase('Olá') // Retorno de falaFrase
const resto = fala('mundo!') // Retorno de falaResto
console.log(fala) 
console.log(resto)
