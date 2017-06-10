const Taller = require('../../../../models/talleres')

module.exports = (req, res) => {
  const { user } = req

  console.log(`El usuario es: ${user.username}`)
  Taller.find({ 'owner': user.username })
    .then(talleres => res.render('myAcount', { talleres, user }))
    .catch(err => { throw err })
}

