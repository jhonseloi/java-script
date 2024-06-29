// 705.484.450-52 | 070.987.720-03
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    validaCpf() {
        if (!this.cpfLimpo) return false
        if (typeof this.cpfLimpo !== 'string') return false
        if (this.cpfLimpo === undefined) return false
        if (this.cpfLimpo.length !== 11) return false
        if (this.sequencia()) return false
        
        this.geraCpf()
        return this.novoCpf === this.cpfLimpo
    }

    geraCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos)
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
        this.novoCpf = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos) {
        const cpfArray = Array.from(cpfSemDigitos)
        let regressivo = cpfArray.length + 1
        const total = cpfArray.reduce((ac, valor) => {
            ac += (regressivo * Number(valor))
            regressivo--
            return ac
        }, 0)

        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }

    sequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }
}
