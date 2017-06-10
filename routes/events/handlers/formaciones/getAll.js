const Formacion = require('../../../../models/formaciones')

module.exports = (req, res) => {
  Formacion.find()
    .then(formaciones => res.render('add-event', { formaciones}))
    .catch(err => { throw err })
}

