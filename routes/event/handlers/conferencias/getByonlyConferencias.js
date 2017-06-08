const Conferencia = require('../../../../models/conferencias')

module.exports = (req, res) => {
  const { id } = req.params

  Conferencia.findById(id)
    .then(conferencias => {
      const action = '/conferencias/edited/' + id
      const method = 'PUT'
      const edited = 'Modificar'
      console.log(conferencias)
      res.render('add-event', { conferencias, action, method, edited })
    })
    .catch(err => { throw err })
  console.log(id)
}

