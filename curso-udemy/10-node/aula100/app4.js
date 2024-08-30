const path = require('path')
const axios = require('axios')

axios('https://github.com/jhonseloi/java-script/blob/master/curso-udemy/8-promises/aula93/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))
