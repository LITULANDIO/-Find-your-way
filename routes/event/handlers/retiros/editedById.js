const Retiro = require('../../../../models/retiros')

module.exports = (req, res) => {
  const { id } = req.params

  let { title, mision, imageUrl, road, comunity, localitation, lat, long, startDate, timeHourStart, timeMinuteStart, endDate, timeHourEnd, timeMinuteEnd, description, price, tel, web, tags } = req.body

  Retiro.findByIdAndUpdate(id, {title, mision, imageUrl, road, comunity, localitation, lat, long, startDate, timeHourStart, timeMinuteStart, endDate, timeHourEnd, timeMinuteEnd, description, price, tel, web, tags })
    .then(retiros => {
      console.log('retiro modificado correctamente: ' + id)
      res.status(200).json(retiros)
    })
    .catch(err => res.status(500).json(err))
}

