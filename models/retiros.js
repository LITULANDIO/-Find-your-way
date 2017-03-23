const mongoose = require('mongoose')
const collection = 'retiros'

const moment = require('moment')
moment.locale('es')
const RetiroSchema = new mongoose.Schema({
  // owner: { type: String, required: true },
  category: { type: String, default: 'retiro' },
  title: { type: String, default: false },
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

module.exports = mongoose.model('retiros', RetiroSchema)
