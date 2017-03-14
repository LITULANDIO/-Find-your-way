const mongoose = require('mongoose')
const collection = 'events'

const EventSchema = new mongoose.Schema({
  // owner: { type: String, required: true },
  category: { type: String, required: true },
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

module.exports = mongoose.model('event', EventSchema)
