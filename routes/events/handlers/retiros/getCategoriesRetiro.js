const Retiro = require('../../../../models/retiros')
const Taller = require('../../../../models/talleres')
const Instructor = require('../../../../models/instructores')
const Conferencia = require('../../../../models/conferencias')
const Formacion = require('../../../../models/formaciones')

module.exports = (req, res) => {
  const { user } = req

  const retir = Retiro.find({ 'owner': user.username })

  const taller = Taller.find({ 'owner': user.username })

  const instructor = Instructor.find({ 'owner': user.username })

  const formacion = Formacion.find({ 'owner': user.username })

  const conferencia = Conferencia.find({ 'owner': user.username })

  Promise.all([retir, taller, instructor, formacion, conferencia]).then(eventos => res.render('myAcount', { eventos, user }))
    .catch(err => { throw err })
}

