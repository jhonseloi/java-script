function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if (this.cpfLimpo === undefined) return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.sequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial) // 705484450
    const digito2 = this.criaDigito(cpfParcial + digito1) // 7054844505

    const novoCpf = cpfParcial + digito1 + digito2
    return this.cpfLimpo === novoCpf
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    cpfArray = Array.from(cpfParcial)
    
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, valor) => {
        ac += (regressivo * Number(valor))
        regressivo--
        return ac
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? 0 : String(digito)
}

ValidaCPF.prototype.sequencia = function() {
    const seq = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return seq === this.cpfLimpo
}

const cpf = new ValidaCPF('705.484.450-52')

if (cpf.valida()) {
    return console.log('CPF válido!')
} else {
    return console.log('CPF inválido!')
}
