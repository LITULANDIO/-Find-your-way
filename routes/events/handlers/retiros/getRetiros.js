const Retiro = require('../../../models/retiros')

module.exports = (req, res) => {
  const { user } = req
  Retiro.find()
    .then(retiros => res.render('Allretiros', { retiros, user }))
    .catch(err => { throw err })
}
