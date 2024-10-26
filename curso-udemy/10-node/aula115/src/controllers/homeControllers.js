exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Título da <span style="color: red">Página</span>',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    })
}

exports.enviaForm = (req, res) => {
    console.log(req.body)
    res.send(`O nome que você enviou foi: "${req.body.cliente}"`)
}
