const Conferencia = require('../../../../models/conferencias')

module.exports = (req, res) => {
  const { user } = req
  Conferencia.find()
    .then(conferencias => res.render('Allretiros', { conferencias, user }))
    .catch(err => { throw err })
}
