const Conferencia = require('../../../../models/conferencias')

module.exports = (req, res) => {
  const { id } = req.params
  const { user } = req
  Conferencia.findById(id)
    .then(conferencias => res.render('fullEventConferencias', { conferencias, user }))
    .catch(err => { throw err })
  console.log(id)
}

