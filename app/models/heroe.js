const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Biblioteca Schema de ta Fechas, numeros string booleanos
const HeroeSchema = new Schema({
 HeroName: String,
 Namer: String,
 abilities: [String]
});

// collections tasks
module.exports =  mongoose.model('heroe', HeroeSchema);
