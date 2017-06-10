const Taller = require('../../../../models/talleres')

module.exports = (req, res) => {
  const { id } = req.params

  Taller.findById(id)
    .then(talleres => {
      const action = '/talleres/edited/' + id
      const method = 'PUT'
      const edited = 'Modificar'
      console.log(talleres)
      res.render('add-event-taller', { talleres, action, method, edited })
    })
    .catch(err => { throw err })
  console.log(id)
}

