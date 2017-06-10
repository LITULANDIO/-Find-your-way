const Taller = require('../../../../models/talleres')

module.exports = (req, res) => {
  const { user } = req
  Taller.find()
    .then(talleres => res.render('Alltalleres', { talleres, user }))
    .catch(err => { throw err })
}
