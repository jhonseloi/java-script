function Calculadora() {
    this.display = document.querySelector('.display')

    this.iniciar = () => {
        this.botoesClique()
        this.padraoZero()
        this.validaInput()
        this.pressionaEnter()
        this.pressionaBackSpace()
    }

    this.botoesClique = () => {
        document.addEventListener('click', evento => {
            const elemento = evento.target

            if (elemento.classList.contains('btn-num')) this.btnParaDisplay(elemento)

            if (elemento.classList.contains('btn-clear')) this.clearDisplay()

            if (elemento.classList.contains('btn-del')) this.deleta()

            if (elemento.classList.contains('btn-equ')) this.fazConta()
        })
    }

    this.btnParaDisplay = valor => {
        this.display.value += valor.innerHTML
        this.display.focus()
    }

    this.clearDisplay = () => {
        this.display.value = ''
        this.padraoZero()
    }

    this.deleta = () => this.display.value = this.display.value.slice(0, -1)

    this.fazConta = () => {
        try {
            const conta = eval(this.display.value)

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

    this.padraoZero = () => this.display.setAttribute('placeholder', '0')

    this.validaInput = () => {
        document.addEventListener('input', evento => {
            const input = evento.target.value
            const ultimoCaractere = input[input.length - 1]
            const num = /[0-9]/

            if (!num.test(ultimoCaractere)) evento.target.value = input.slice(0, -1)
        })
    }

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', evento => {
            if (evento.keyCode === 13) this.fazConta()
        })
    }

    this.pressionaBackSpace = () => {
        this.display.addEventListener('keydown', evento => {
            if (evento.keyCode === 8) {
                evento.preventDefault()
                this.deleta()
            }
        })
    }
}

const calc = new Calculadora()
calc.iniciar()
