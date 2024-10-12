exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome"> 
        <button>Enviar</button> 
        </form>`
    )
}

exports.enviaForm = (req, res) => {
    console.log(req.body)
    res.send(`O nome que você enviou foi: "${req.body.nome}"`)
}
