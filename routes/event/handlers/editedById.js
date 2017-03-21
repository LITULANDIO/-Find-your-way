const Retiro = require('../../../models/retiros')

module.exports = (req, res) => {
  const { id } = req.params

  let { title, category, road, comunity, localitation, startDate, timeHourStart, timeMinuteStart, endDate, timeHourEnd, timeMinuteEnd, description, tags } = req.body

  Retiro.findByIdAndUpdate(id, {title, category, road, comunity, localitation, startDate, timeHourStart, timeMinuteStart, endDate, timeHourEnd, timeMinuteEnd, description, tags })
    .then(retiros => {
      console.log('retiro modificado correctamente: ' + id)
      res.status(200).json(retiros)
    })
    .catch(err => res.status(500).json(err))
}
