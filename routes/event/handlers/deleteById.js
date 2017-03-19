const Retiro = require('../../../models/retiros')

module.exports = (req, res) => {
  const { id } = req.params

  Retiro.findByIdAndRemove(id)
    .then(retiros => {
      console.log(`retiro BORRADO: ` + id)
      res.redirect('/acount:id')
    })
    .catch(err => res.status(500).json(err))
}

