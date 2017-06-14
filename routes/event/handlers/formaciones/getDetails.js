const Formacion = require('../../../../models/formaciones')

module.exports = (req, res) => {
  const { id } = req.params
  const { user } = req

  Formacion.findById(id)
    .then(formaciones => res.render('fullEventFormaciones', { formaciones, user }))
    .catch(err => { throw err })
  console.log(id)
}

