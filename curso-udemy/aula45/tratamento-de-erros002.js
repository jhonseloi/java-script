try {
    console.log(a)
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou um erro')
    console.log('Fechei o arquivo')
} catch (e) {
    console.log('Tratando o erro')
} finally {
    console.log('FINALLY: sempre será executado')
}
