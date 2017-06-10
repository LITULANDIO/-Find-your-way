const Conferencia = require('../../../../models/conferencias')

module.exports = (req, res) => {
  const { tipo } = req.params // variable que introduim per filtrar tipus
  console.log(req.params)
  Conferencia.find({'road': {$eq: tipo} })
    .then(conferencias => res.render('Allconferencias', { conferencias }))
    .catch(err => { throw err })
  console.log('el camino escogido es: ' + tipo)
}

