const Retiro = require('../../../models/retiros')

module.exports = (req, res) => {
  // const { user } = req
  Retiro.find(/*/{ 'owner': user.username }/*/)
    .then(retiros => res.render('myAcount', { retiros }))
    .catch(err => { throw err })
}
