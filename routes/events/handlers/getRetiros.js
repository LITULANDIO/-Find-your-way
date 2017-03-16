const Retiro = require('../../../models/retiros')

module.exports = (req, res) => {
  Retiro.find()
    .then(retiros => res.render('Allretiros', { retiros }))
    .catch(err => { throw err })
}
