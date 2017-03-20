const Retiro = require('../../../models/retiros')

module.exports = (req, res) => {
  const { id } = req.body
  console.log(id)
  Retiro.findByIdAndRemove(id)
    .then(retiros => {
      console.log(`retiro BORRADO: ` + id)
      res.status(200).json(retiros)
    })
}
