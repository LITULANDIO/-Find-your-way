const Formacion = require('../../../../models/formaciones')

module.exports = (req, res) => {
  const { user } = req

  console.log(`El usuario es: ${user.username}`)
  Formacion.find({ 'owner': user.username })
    .then(formaciones => res.render('myAcount', { formaciones, user }))
    .catch(err => { throw err })
}

