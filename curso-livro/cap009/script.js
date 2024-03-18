let contatos = []

function add_contato() {
    let nome = document.querySelector('input#nome').value
    let email = document.querySelector('input#email').value
    let idade = document.querySelector('input#idade').value

    if (nome == 0 || email == 0 || idade == 0) {
        alert('Preencha todos os formulários!')
    } else {
        let contato = {
            n: nome, 
            e: email,
            i: idade
        }
        contatos.push(contato)

        document.querySelector('input#nome').value = ''
        document.querySelector('input#email').value = ''
        document.querySelector('input#idade').value = ''

        lista_contatos()

        function lista_contatos() {
            for (c = 0; c < contatos.length; c++) {
                console.log(`Nome: ${contatos[c].n}; Idade: ${contatos[c].i} anos; Email ${contatos[c].e}.`)
            } 
        }      
    }
}