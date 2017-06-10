const Retiro = require('../../../models/retiros')

module.exports = (req, res) => {
  Retiro.find()
    .then(retiros => res.render('add-event', { retiros}))
    .catch(err => { throw err })
}

