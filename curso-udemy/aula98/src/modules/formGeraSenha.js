import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const checMaiusculas = document.querySelector('.chec-maiusculas')
const checMinusculas = document.querySelector('.chec-minusculas')
const checNumeros = document.querySelector('.chec-numeros')
const checSimbolos = document.querySelector('.chec-simbolos')

export const gerarSenha = document.querySelector('.gerar-senha')
export const limpar = document.querySelector('.limpar')

gerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gerador()
})

limpar.addEventListener('click', () => {
    const limparCheckbox = document.querySelectorAll('.checked')

    senhaGerada.innerHTML = 'Selecione as opções'
    qtdCaracteres.value = ''
    limparCheckbox.forEach(checkbox => checkbox.checked = false)
})

function gerador() {
    const senha = geraSenha(
        qtdCaracteres.value,
        checMaiusculas.checked,
        checMinusculas.checked,
        checNumeros.checked,
        checSimbolos.checked
    )
  
    if (!senha && qtdCaracteres.value < 4 || qtdCaracteres.value > 20) {
        return 'Escolha a quantidade de caracteres e selecione uma das opções.'
    } else if (qtdCaracteres.value < 4 || qtdCaracteres.value > 20) {
        return 'Quantidade de caracteres inválida.'
    } else {
        return senha || 'Nenhuma opção selecionada.'
    }
}
