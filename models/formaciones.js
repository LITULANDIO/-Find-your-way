const mongoose = require('mongoose') // requerimos mongoose

const passportLocalMongoose = require('passport-local-mongoose')

const moment = require('moment') // libreria moments
moment.locale('es') // traducir moments de inglés a español

const collection = 'formaciones' // creamos una colección llamada formaciones
const FormacionSchema = new mongoose.Schema({
// Creamos la base de datos y especificamos los campos con sus tipos
  owner: {type: String, required: false},
  category: { type: String, default: 'formacion' },
  title: String,
  mision: String,
  imageUrl: String,
  aprender: String,
  road: String,
  lat: Number,
  long: Number,
  comunity: String,
  localitation: String,
  createdEvent: { type: String, default: moment().format('L')},
  hourEvent: { type: String, default: moment().format('LT')},
  startDate: String,
  timeHourStart: Number,
  timeMinuteStart: Number,
  endDate: String,
  timeHourEnd: Number,
  timeMinuteEnd: Number,
  description: String,
  Service: Boolean,
  price: Number,
  tel: Number,
  web: String,
  tags: String
}, { collection })

FormacionSchema.virtual('imageurl').get(function () {
  if (this.imageUrl === undefined) {
    return '.img/nodisponible.png'
  }
  return this.imageUrl
})
FormacionSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('formaciones', FormacionSchema)
// exportamos el modelo creado de la base de datos + coleccion

