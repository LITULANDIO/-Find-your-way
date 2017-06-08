const Taller = require('../../../../models/retiros')

module.exports = (req, res) => {
  const { id } = req.params

  Taller.findById(id)
    .then(talleres => res.render('fullEvent', { talleres }))
    .catch(err => { throw err })
  console.log(id)
}

