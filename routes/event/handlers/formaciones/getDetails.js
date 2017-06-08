const Formacion = require('../../../../models/formaciones')

module.exports = (req, res) => {
  const { id } = req.params

  Formacion.findById(id)
    .then(formaciones => res.render('fullEvent', { formaciones }))
    .catch(err => { throw err })
  console.log(id)
}

