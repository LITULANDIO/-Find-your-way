const Retiro = require('../../../models/retiros')

module.exports = (req, res) => {
  const { id } = req.params

  Retiro.findById(id)
    .then(retiros => res.render('add-event', { retiros }))
    .catch(err => { throw err })
  console.log(id)
}

