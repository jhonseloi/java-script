function Calculadora() {
    this.display = document.querySelector('.display')

    this.iniciar = function () {
        this.botoesClique()
        this.validaInput()
        this.padraoZero()
        this.pressionaEnter()
        this.pressionaBackSpace()
    }

    this.botoesClique = function () {
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

    this.btnParaDisplay = function (valor) {
        this.display.value += valor
    }

    this.clearDisplay = function () {
        this.display.value = ''
        this.padraoZero()
    }

    this.apagaUm = function () {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.fazConta = function () {
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

    this.validaInput = function () {
        document.addEventListener('input', evento => {
            const input = evento.target.value
            const ultimoCaractere = input[input.length - 1]
            const num = /[0-9]/

            if (!num.test(ultimoCaractere)) {
                evento.target.value = input.slice(0, -1)
            }
        })
    }

    this.padraoZero = function () {
        this.display.setAttribute('placeholder', '0')
    }

    this.pressionaEnter = function () {
        this.display.addEventListener('keyup', evento => {
            if (evento.keyCode === 13) {
                this.fazConta()
            }
        })
    }

    this.pressionaBackSpace = function () {
        this.display.addEventListener('keydown', evento => {
            if (evento.keyCode === 8) {
                evento.preventDefault()
                this.apagaUm()
            }
        })
    }

    this.soma = function () {
        document.addEventListener('keydown', evento => {
            if (evento.keyCode === 107) {
                this.btnParaDisplay('+')
            }
        })
    }    
}

const calc = new Calculadora()
calc.iniciar()
