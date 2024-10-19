module.exports = (req, res, next) => {
    if (req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Fernandes', '[NÃO USE FERNANDES]')
        console.log()
        console.log(`O nome do cliente é: ${req.body.cliente}`)
        console.log()
    }
    next()
}
