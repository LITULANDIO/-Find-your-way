const Event = require('../../../models/events')

module.exports = (req, res) => {
  console.log('He recibido lo siguiente', req.body)
  const { title } = req.body
  const { category } = req.body
  const { path } = req.body
  const { comunity } = req.body
  const { localitation } = req.body
  const { startDate } = req.body
  const { timeHourStart } = req.body
  const { timeMinuteStart } = req.body
  const { endDate } = req.body
  const { timeHourEnd } = req.body
  const { timeMinuteEnd } = req.body
  const { description } = req.body
  const { tags } = req.body
  const event = new Event({ title, category, path, comunity, localitation, startDate, timeHourStart, timeMinuteStart, endDate, timeHourEnd, timeMinuteEnd, description, tags })

  console.log(event)
  event.save()

  // res.status(200).json(event)
  res.redirect('/events')
}
