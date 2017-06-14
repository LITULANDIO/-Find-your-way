const Retiro = require('../../../../models/retiros')

module.exports = (req, res) => {
  const { id } = req.params
  const { user } = req
  Retiro.findById(id)
    .then(retiros => res.render('fullEventRetiros', { retiros, user }))
    .catch(err => { throw err })
  console.log(id)
}

