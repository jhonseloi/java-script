function Calculadora() {
    this.display = document.querySelector('.display')

    this.iniciar = function() {
        this.botoesClique()
        this.pressionaEnter()
        this.pressinaBackSpace()
        this.validaInput()
        this.padraoZero()
    }

    this.botoesClique = function() {
        document.addEventListener('click', evento => {
            const elemento = evento.target

            if (elemento.classList.contains('btn-num')) {
                this.btnParaDisplay(elemento.innerHTML)
            }

            if (elemento.classList.contains('btn-clear')) {
                this.clearDisplay()
            }

            if (elemento.classList.contains('btn-del')) {
                this.apagaUm()
            }

            if (elemento.classList.contains('btn-equ')) {
                this.fazConta()
            }
        })
    }

    this.btnParaDisplay = function(valor) {
        this.display.value += valor
    }

    this.clearDisplay = function() {
        this.display.value = ''
        this.padraoZero()
    }

    this.apagaUm = function() {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.fazConta = function() {
        let conta = this.display.value

        try {
            conta = eval(conta)

            if (!conta) {
                alert('Conta inválida!')
                return
            }

            this.display.value = String(conta)
        } catch (evento) {
            if (!conta) {
                alert('Conta inválida!')
                return
            }
        }
    }

    this.pressionaEnter = function() {
        this.display.addEventListener('keyup', evento => {
            if (evento.keyCode === 13) {
                this.fazConta()
            }
        })
    }

    this.pressinaBackSpace = function() {
        this.display.addEventListener('keydown', evento => {
            if (evento.keyCode === 8) {
                evento.preventDefault()
                this.clearDisplay()
            }
        })
    }

    this.validaInput = function() {
        this.display.addEventListener('input', evento => {
            const input = evento.target.value
            const ultimoCaractere = input[input.length - 1]
            const num = /[0-9]/

            if (!num.test(ultimoCaractere)) {
                evento.target.value = input.slice(0, - 1)
            }
        })
    }

    this.padraoZero = function() {
        this.display.setAttribute('placeholder', '0')
    }
}

const calc = new Calculadora()
calc.iniciar()
