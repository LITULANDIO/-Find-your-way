const Taller = require('../../../../models/talleres')

module.exports = (req, res) => {
  const { tipo } = req.params // variable que introduim per filtrar tipus
  console.log(req.params)
  Taller.find({'road': {$eq: tipo} })
    .then(talleres => res.render('AllTalleres', { talleres }))
    .catch(err => { throw err })
  console.log('el camino escogido es: ' + tipo)
}

