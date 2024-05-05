// Filter -> Sempre vai retornar (filtrar) uma array com a mesma quantidade de elementos ou menos

function filter1() {
    // Retornar número maior que 10 (versão estendida)
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

    function filterCallback(valor) {
        if (valor > 10) {
            return valor
        } else {
            return
        }
    } 

    const numerosFiltrados = numeros.filter(filterCallback)
    console.log(numerosFiltrados)
}
filter1()

const filter2 = () => {
    // Retornar número maior que 10 (versão encurtada)
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
    
    const numerosFiltrados = numeros.filter(valor => valor > 10)
    console.log(numerosFiltrados)
}
filter2()
