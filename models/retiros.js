const mongoose = require('mongoose')
const collection = 'retiros'

const RetiroSchema = new mongoose.Schema({
  // owner: { type: String, required: true },
  category: { type: String, default: 'retiro' },
  title: { type: String, default: false },
  path: String,
  comunity: String,
  localitation: String,
  createdEvent: { type: Number, default: Date.now },
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
