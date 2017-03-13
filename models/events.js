const mongoose = require('mongoose')
const collection = 'eventsUser'

const EventSchema = new mongoose.Schema({
  // owner: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, default: false },
  localitation: String,
  createdEvent: { type: Number, default: Date.now },
  startDate: String,
  endDate: String,
  description: String,
  tags: String
}, { collection })

module.exports = mongoose.model('event', EventSchema)
