const Instructor = require('../../../../models/instructores')

module.exports = (req, res) => {
  const { user } = req
  Instructor.find()
    .then(instructores => res.render('Allinstructores', { instructores, user }))
    .catch(err => { throw err })
}
