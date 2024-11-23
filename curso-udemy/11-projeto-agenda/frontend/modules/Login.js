import validator from 'validator'

export default class Login {
    constructor(formLogin) {
        this.form = document.querySelector(formLogin)
    }

    error(input, message) {
        const errorDiv = document.createElement('div')
        errorDiv.className = 'error-message'

        const existingError = input.parentElement.querySelector('.error-message')
        if(existingError) existingError.remove()
        errorDiv.innerText = message
    
    input.parentElement.appendChild(errorDiv)
    input.classList.add('input-error')
    
        input.addEventListener('input', () => this.clearError(input))
    }
    
    clearError(input) {
        const errorDiv = input.parentElement.querySelector('.error-message')
        if(errorDiv) errorDiv.remove()
        input.classList.remove('input-error')
    }
    
    clearErrors() {
        const errorMessages = this.form.querySelectorAll('.error-message')
        errorMessages.forEach((msg) => msg.remove())
        
        const errorInputs = this.form.querySelectorAll('.input-error')
        errorInputs.forEach((input) => input.classList.remove('input-error'))
    }

    validate(e) {
        const el = e.target
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')
        let isValid = true
    
        this.clearErrors()
    
        if (!validator.isEmail(emailInput.value)) {
            this.error(emailInput, 'E-mail inválido.')
            isValid = false
        } else {
            this.clearError(emailInput)
        }
    
        if (passwordInput.value.length < 4 || passwordInput.value.length > 20) {
            this.error(passwordInput, 'A senha precisa ter entre 4 e 20 caracteres.')
            isValid = false
        } else {
            this.clearError(passwordInput)
        }
    
        if(isValid) el.submit()
    }
    
    events() {
        if(!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
    }

    init() {
        this.events()
    }
}
