const Formacion = require('../../../models/formaciones')

module.exports = (req, res) => {
  const { id } = req.params

  Formacion.findById(id)
    .then(formaciones => {
      const action = '/formaciones/edited/' + id
      const method = 'PUT'
      const edited = 'Modificar'
      console.log(formaciones)
      res.render('add-event', { formaciones, action, method, edited })
    })
    .catch(err => { throw err })
  console.log(id)
}

