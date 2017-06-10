const Instructor = require('../../../../models/instructores')

module.exports = (req, res) => {
  const { id } = req.params

  let { nombre, apellidos, road, comunity, localitation, lat, long, curriculum, mision, articles, books, webs, socials, tags} = req.body

  Instructor.findByIdAndUpdate(id, {nombre, apellidos, road, comunity, localitation, lat, long, curriculum, mision, articles, books, webs, socials, tags })
    .then(instructores => {
      console.log('retiro modificado correctamente: ' + id)
      res.status(200).json(instructores)
    })
    .catch(err => res.status(500).json(err))
}

