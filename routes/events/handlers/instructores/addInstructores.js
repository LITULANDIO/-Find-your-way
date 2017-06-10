const Instructor = require('../../../../models/instructores')
const cloudinary = require('cloudinary')

cloudinary.config({
  cloud_name: 'skylab',
  api_key: '256873742322626',
  api_secret: 'xU1Ey69SfyXtcSti4JI4AmslNOg'
})

console.log(':)')
module.exports = (req, res) => {
  // console.log('He recibido lo siguiente', req.body)
  const owner = req.user.username
  const { category } = req.body
  const { imageUrl } = req.file
  const { nombre} = req.body
  const { apellidos } = req.body
  const { road } = req.body
  const { lat } = req.body
  const { long } = req.body
  const { comunity } = req.body
  const { localitation } = req.body
  const { curriculum } = req.body
  const { mision } = req.body
  const { articles } = req.body
  const { books } = req.body
  const { webs } = req.body
  const { tags } = req.body
  const instructor = new Instructor({ owner, imageUrl, nombre, apellidos, category, road, comunity, localitation, lat, long, curriculum, mision, articles, books, webs, tags })

  console.log('la imagen es: ' + req.file.imageUrl)

  if (req.file) {
    cloudinary.uploader.upload(req.file.path,
  function (result) {
    instructor.imageUrl = result.url
    instructor.save()// (function (err) {
      // res.render('add-event')
    // })
  },
      {
        public_id: 'sample_id',
        crop: 'limit',
        width: 1000,
        height: 1000
      }
)
  } else {
    instructor.save()// (function (err) {
     // console.log(retiro)
      // res.render('add-event')
    // })
  }

  console.log('Retiro creado' + instructor)
  // res.status(200).json(event)
  res.redirect('/acount')
}
