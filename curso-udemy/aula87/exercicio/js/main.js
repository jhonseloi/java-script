class ValidarFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado!')
            this.formulario.submit()
        }
    }

    camposSaoValidos() {
        let valid = true

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }
        
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML

            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco.`)
                valid = false
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false
            }
        }

        return valid
    }

    senhasSaoValidas() {
        let valid = true

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if (senha.value !== repetirSenha.value) {
            this.criaErro(senha, `Campos senha e repetir senha precisam ser iguais.`)
            this.criaErro(repetirSenha, `Campos senha e repetir senha precisam ser iguais.`)
            valid = false
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, `Campo senha precisam ter entre 6 e 12 caracteres.`)
            valid = false
        }

        return valid
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo)

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.')
            return false
        }

        return true
    }

    validaUsuario(campo) {
        let valid = true
        const usuario = campo.value

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.')
            valid = false
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuário precisa ter bletras e/ou números.')
            valid = false
        }

        return valid
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidarFormulario()
