function formulario() {
    const form = document.querySelector('.form')
    const res = document.querySelector('#res')
    const pessoas = []

    function eventoForm(evento) {
        evento.preventDefault()
        nome = document.querySelector('#nome')
        sobrenome = document.querySelector('#sobrenome')
        peso = document.querySelector('#peso')
        altura = document.querySelector('#altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)
        res.innerHTML += `<p>Seu nome é <strong>${nome.value} ${sobrenome.value}</strong>, pesa <strong>${peso.value}kg</strong> e tem <strong>${altura.value}</strong> de altura.</p>`

        nome.value = ''
        sobrenome.value = ''
        peso.value = ''
        altura.value = ''
    }

    form.addEventListener('submit', eventoForm)
}
formulario()
