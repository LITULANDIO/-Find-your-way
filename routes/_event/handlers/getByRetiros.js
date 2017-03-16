const Retiro = require('../../../models/retiros')

module.exports = (req, res) => {
  const { tipo } = req.params // variable que introduim per filtrar tipus
  console.log(req.params)
  Retiro.find({'road': {$eq: tipo} })
    .then(retiros => res.render('Allretiros', { retiros }))
    .catch(err => { throw err })
  console.log('el camino escogido es: ' + tipo)
}

