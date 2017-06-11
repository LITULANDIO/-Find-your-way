const Conferencia = require('../../../../models/conferencias')

module.exports = (req, res) => {
  const { user } = req

  console.log(`El usuario es: ${user.username}`)
  Conferencia.find({ 'owner': user.username })
    .then(conferencias => res.render('myAcount', { conferencias, user }))
    .catch(err => { throw err })
}

