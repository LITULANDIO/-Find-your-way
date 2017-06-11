const mongoose = require('mongoose') // requerimos mongoose
const collection = 'instructores' // creamos una colección llamada retiros
const passportLocalMongoose = require('passport-local-mongoose')

const InstructorSchema = new mongoose.Schema({ // Creamos la base de datos y especificamos los campos con sus tipos
  owner: {type: String, required: false},
  category: { type: String, default: 'instructor' },
  imageUrl: String,
  nombre: String,
  apellidos: String,
  date: String,
  road: String,
  comunity: String,
  localitation: String,
  lat: Number,
  long: Number,
  curriculum: String,
  mision: String,
  articles: String,
  books: String,
  webs: String,
  socials: String,
  tags: String
}, { collection })

InstructorSchema.virtual('imageurl').get(function () {
  if (this.imageUrl === undefined) {
    return '.img/nodisponible.png'
  }
  return this.imageUrl
})
InstructorSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('instructores', InstructorSchema) // exportamos el modelo creado de la base de datos + coleccion

