const Instructor = require('../../../../models/instructores')

module.exports = (req, res) => {
  const { user } = req

  console.log(`El usuario es: ${user.username}`)
  Instructor.find({ 'owner': user.username })
    .then(instructores => res.render('myAcount', { instructores, user }))
    .catch(err => { throw err })
}

