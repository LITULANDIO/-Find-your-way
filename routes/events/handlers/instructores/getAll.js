const Instructor = require('../../../../models/instructores')

module.exports = (req, res) => {
  Instructor.find()
    .then(instructores => res.render('add-event', { instructores}))
    .catch(err => { throw err })
}

