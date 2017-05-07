
const mongoose = require('mongoose') // requerimos mongoose
const collection = 'retiros' // creamos una colección llamada retiros
const passportLocalMongoose = require('passport-local-mongoose')

const moment = require('moment') // libreria moments
moment.locale('es') // traducir moments de inglés a español

const RetiroSchema = new mongoose.Schema({ // Creamos la base de datos y especificamos los campos con sus tipos
  owner: {type: String, required: true},
  category: { type: String, default: 'retiro' },
  title: String,
  imageUrl: String,
  precio: Number,
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
  tags: String
}, { collection })

RetiroSchema.virtual('imageurl').get(function () {
  if (this.imageUrl === undefined) {
    return '.img/nodisponible.png'
  }
  return this.imageUrl
})
RetiroSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('retiros', RetiroSchema) // exportamos el modelo creado de la base de datos + coleccion
