const Taller = require('../../../../models/talleres')

module.exports = (req, res) => {
  const { id } = req.params

  let { title, category, mision, imageUrl, road, comunity, localitation, lat, long, startDate, timeHourStart, timeMinuteStart, endDate, timeHourEnd, timeMinuteEnd, description, price, tel, web, tags } = req.body

  Taller.findByIdAndUpdate(id, {title, category, mision, imageUrl, road, comunity, localitation, lat, long, startDate, timeHourStart, timeMinuteStart, endDate, timeHourEnd, timeMinuteEnd, description, price, tel, web, tags })
    .then(talleres => {
      console.log('taller modificado correctamente: ' + id)
      res.status(200).json(talleres)
    })
    .catch(err => res.status(500).json(err))
}
