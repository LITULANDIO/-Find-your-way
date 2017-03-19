const Retiro = require('../../../models/retiros')

module.exports = (req, res) => {
  const { id } = req.params

  Retiro.findById(id)
     .then(retiros => res.render('myAcount', { retiros }))
    .catch(err => { throw err })
}
