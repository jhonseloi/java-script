function boas_vindas() {
    let nome = prompt('Qual é o seu nome?')
    if (nome != 0) {
        let id = prompt(`Olá, ${nome}! Quantos anos você tem?`)
        let idade = Number(id)
        if (idade != 0) {
            alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`) 
        } else {
            alert('Preencha os dados!')
        }
    } else {
        alert('Preencha os dados!')
    }
}

/* 
typeoff === "number/string/outro type" 
Esta é a condição usada para aceitar ou recusar o type especídico de um valor.
*/