const User = require('../../../models/counts')

console.log(':)')
module.exports = (req, res) => {
  console.log('He recibido lo siguiente', req.body)
  const { username } = req.body
  const { email } = req.body
  const { password } = req.body

  const user = new User({ username, email, password })

  user.save()
  res.redirect('/login')

  console.log('user creado' + user)
  // res.status(200).json(event)
}
