const Instructor = require('../../../../models/instructores')

module.exports = (req, res) => {
  const { user } = req
  Instructor.find()
    .then(instructores => res.render('Allretiros', { instructores, user }))
    .catch(err => { throw err })
}
