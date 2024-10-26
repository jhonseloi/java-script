module.exports = (req, res, next) => {
    res.locals.variavelLocal = 'Esse é o valor da variável local.'
    next()
}
