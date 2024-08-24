function criaCalculadora() {
    return {
        display: document.querySelector('.display'), 

        iniciar() {
            this.clearDisplay()
            this.botoesClique()
            this.pressionaEnter()
            this.pressionaBackSpace()
            this.validaInput()
        },

        botoesClique() {
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

                this.display.focus()
            })
        },

        btnParaDisplay(valor) {
            if (this.display.value === '0') {
                this.display.value = valor
            } else {
                this.display.value += valor
            }
        },

        clearDisplay() {
            this.display.value = '0'
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        fazConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Conta inválida!')
                    return
                }

                this.display.value = String(conta)
            } catch(evento) {
                alert('Conta inválida!') 
                return
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', evento => {
                if (evento.keyCode === 13) {
                    this.fazConta()
                }
            })
        }, 

        pressionaBackSpace() {
            this.display.addEventListener('keydown', evento => {
                if (evento.keyCode === 8) {
                    evento.preventDefault()
                    this.apagaUm()
                }
            })
        },

        validaInput() {
            this.display.addEventListener('input', evento => {
                const input = evento.target.value
                const ultimoCaractere = input[input.length - 1]
                const num = /[0-9]/

                if (!num.test(ultimoCaractere)) {
                    evento.target.value = input.slice(0, -1)
                }
            })
        }
    }
} 

const calculadora = criaCalculadora()
calculadora.iniciar()
