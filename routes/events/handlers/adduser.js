const User = require('../../../models/Account')

console.log(':)')
module.exports = (req, res) => {
  console.log('He recibido lo siguiente', req.body)
  const { username } = req.body
  const { email } = req.body
  const { password } = req.body

  const user = new User({ username, email, password })

  user.save()
 .then(() => {
   console.log('Retiro creado' + user)
  // res.status(200).json(event)
   res.redirect('/login')
 })
}
