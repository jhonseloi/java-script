exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.enviaForm = (req, res) => {
    console.log(req.body)
    res.send(`O nome que você enviou foi: "${req.body.cliente}"`)
}
