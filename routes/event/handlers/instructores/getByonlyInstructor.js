const Instructor = require('../../../../models/instructores')

module.exports = (req, res) => {
  const { id } = req.params

  Instructor.findById(id)
    .then(instructores => {
      const action = '/instructores/edited/' + id
      const method = 'PUT'
      const edited = 'Modificar'
      console.log(instructores)
      res.render('add-event-instructor', { instructores, action, method, edited })
    })
    .catch(err => { throw err })
  console.log(id)
}

