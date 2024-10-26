const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String,
    numero: Number
})

const HomeModel = mongoose.model('Home', HomeSchema)

const Home = {
    
}

module.exports = Home
