const Taller = require('../../../../models/talleres')

module.exports = (req, res) => {
  const { id } = req.params
  const { user } = req
  Taller.findById(id)
    .then(talleres => res.render('fullEventTalleres', { talleres, user }))
    .catch(err => { throw err })
  console.log(id)
}

