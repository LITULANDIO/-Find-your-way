const Conferencia = require('../../../../models/conferencias')

module.exports = (req, res) => {
  const { id } = req.params

  Conferencia.findById(id)
    .then(conferencias => res.render('fullEvent', { conferencias }))
    .catch(err => { throw err })
  console.log(id)
}

