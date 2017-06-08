const Instructor = require('../../../../models/instructores')

module.exports = (req, res) => {
  const { tipo } = req.params // variable que introduim per filtrar tipus
  console.log(req.params)
  Instructor.find({'road': {$eq: tipo} })
    .then(instructores => res.render('Allinstructores', { instructores }))
    .catch(err => { throw err })
  console.log('el camino escogido es: ' + tipo)
}

