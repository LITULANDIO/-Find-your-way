const Formacion = require('../../../../models/formaciones')

module.exports = (req, res) => {
  const { id } = req.params

  let { title, category, mision, imageUrl, road, comunity, localitation, lat, long, startDate, timeHourStart, timeMinuteStart, endDate, timeHourEnd, timeMinuteEnd, description, price, tel, web, tags } = req.body

  Formacion.findByIdAndUpdate(id, {title, category, mision, imageUrl, road, comunity, localitation, lat, long, startDate, timeHourStart, timeMinuteStart, endDate, timeHourEnd, timeMinuteEnd, description, price, tel, web, tags })
    .then(formaciones => {
      console.log('formacion modificado correctamente: ' + id)
      res.status(200).json(retiros)
    })
    .catch(err => res.status(500).json(err))
}
