const Instructor = require('../../../../models/instructores')

module.exports = (req, res) => {
  const { id } = req.params
  const { user } = req
  Instructor.findById(id)
    .then(instructores => res.render('fullEventInstructor', { instructores, user }))
    .catch(err => { throw err })
  console.log(id)
}

