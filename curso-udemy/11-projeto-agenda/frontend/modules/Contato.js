import validator from 'validator'

export default class Contato {
    constructor(formContato) {
        this.form = document.querySelector(formContato)
    }

    error(input, message) {
        const existingError = input.parentElement.querySelector('.error-message')
        if (existingError) existingError.remove()

        const errorDiv = document.createElement('div')
        errorDiv.className = 'error-message'
        errorDiv.innerText = message
        input.parentElement.appendChild(errorDiv)

        input.classList.add('input-error')
        input.addEventListener('input', () => this.clearError(input))
    }

    clearError(input) {
        const errorDiv = input.parentElement.querySelector('.error-message')
        if (errorDiv) errorDiv.remove()
        input.classList.remove('input-error')
    }

    clearErrors() {
        const errorMessages = this.form.querySelectorAll('.error-message')
        errorMessages.forEach((msg) => msg.remove())

        const errorInputs = this.form.querySelectorAll('.input-error')
        errorInputs.forEach((input) => input.classList.remove('input-error'))
    }

    validate(e) {
        const el = this.form
        const nomeInput = el.querySelector('input[name="nome"]')
        const emailInput = el.querySelector('input[name="email"]')
        const telefoneInput = el.querySelector('input[name="telefone"]')
        let isValid = true

        this.clearErrors()

        if (!validator.isEmail(emailInput.value)) {
            this.error(emailInput, 'E-mail inválido.')
            isValid = false
        }

        if (!nomeInput.value.trim()) {
            this.error(nomeInput, 'Nome é um campo obrigatório.')
            isValid = false
        }

        if (!emailInput.value.trim() && !telefoneInput.value.trim()) {
            this.error(telefoneInput, 'Pelo menos um contato precisa ser enviado: e-mail ou telefone.')
            isValid = false
        }

        if (isValid) el.submit()
    }

    events() {
        if (!this.form) return
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.validate(e)
        })
    }

    init() {
        this.events()
    }
}
