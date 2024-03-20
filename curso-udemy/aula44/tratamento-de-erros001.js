/*
TRATAMENTO DE ERROS
** throw = Lança o erro;
** try = captura o erro. Se não ocorrer erro dentro do bloco de try, o seu bloco será executado;
** catch = se houver erro no bloco de try, o bloco de catch será executado.
** finally = sempre será executado,. Caso queira, pode ser otimido.
*/

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.')
    }

    return x + y
}

try {
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch(error) { // e ou err são outras opções comuns de nome
    console.log('Alguma coisa mais amigável para o usuário')
}
