const Instructor = require('../../../../models/instructores')

module.exports = (req, res) => {
  const { id } = req.params

  Instructor.findById(id)
    .then(instructores => res.render('fullEvent', { instructores }))
    .catch(err => { throw err })
  console.log(id)
}

