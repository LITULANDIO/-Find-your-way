const Conferencia = require('../../../../models/conferencias')

module.exports = (req, res) => {
  const { id } = req.params

  let { title, category, road, comunity, localitation, plataforma, startDate, timeHourStart, timeMinuteStart, endDate, timeHourEnd, timeMinuteEnd, description, tags } = req.body

  Conferencia.findByIdAndUpdate(id, {title, category, road, comunity, localitation, plataforma, startDate, timeHourStart, timeMinuteStart, endDate, timeHourEnd, timeMinuteEnd, description, tags })
    .then(conferencias => {
      console.log('retiro modificado correctamente: ' + id)
      res.status(200).json(conferencias)
    })
    .catch(err => res.status(500).json(err))
}
