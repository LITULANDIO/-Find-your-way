const Retiro = require('../../../models/retiros')

module.exports = (req, res) => {
  const { user } = req

  console.log(`El usuario es: ${user.username}`)
  Retiro.find({ 'owner': user.username })
    .then(retiros => res.render('myAcount', { retiros, user }))
    .catch(err => { throw err })
}

