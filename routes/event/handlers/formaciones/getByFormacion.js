const Formacion = require('../../../../models/formaciones')

module.exports = (req, res) => {
  const { tipo } = req.params // variable que introduim per filtrar tipus
  console.log(req.params)
  Formacion.find({'road': {$eq: tipo} })
    .then(formaciones => res.render('Allformaciones', { formaciones }))
    .catch(err => { throw err })
  console.log('el camino escogido es: ' + tipo)
}

