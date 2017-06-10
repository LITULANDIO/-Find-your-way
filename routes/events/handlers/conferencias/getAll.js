const Conferencia = require('../../../../models/conferencias')

module.exports = (req, res) => {
  Conferencia.find()
    .then(conferencias => res.render('add-event', { conferencias}))
    .catch(err => { throw err })
}

