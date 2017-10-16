const Conferencia = require('../../../../models/conferencias')
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
  const { title } = req.body
  const { category } = req.body
  const { plataforma} = req.body
  const { mision } = req.body
 // const { imageUrl } = req.file
  const { road } = req.body
  const { lat } = req.body
  const { long } = req.body
  const { comunity } = req.body
  const { localitation } = req.body
  const { startDate } = req.body
  const { timeHourStart } = req.body
  const { timeMinuteStart } = req.body
  const { endDate } = req.body
  const { timeHourEnd } = req.body
  const { timeMinuteEnd } = req.body
  const { description } = req.body
  const { price } = req.body
  const { tel } = req.body
  const { web } = req.body
  const { tags } = req.body
  const conferencia = new Conferencia({ owner, title, mision, category, plataforma, road, comunity, localitation, lat, long, startDate, timeHourStart, timeMinuteStart, endDate, timeHourEnd, timeMinuteEnd, description, price, tel, web, tags })

//   console.log('la imagen es: ' + req.file.imageUrl)

//   if (req.file) {
//     cloudinary.uploader.upload(req.file.path,
//   function (result) {
//     conferencia.imageUrl = result.url
//     conferencia.save()// (function (err) {
//       // res.render('add-event')
//     // })
//   },
//       {
//         public_id: 'sample_id',
//         crop: 'limit',
//         width: 1000,
//         height: 1000
//       }
// )
//   } else {
  conferencia.save()// (function (err) {
     // console.log(retiro)
      // res.render('add-event')
    // })
  // }

  console.log('Retiro creado' + conferencia)
  // res.status(200).json(event)
  res.redirect('/acount')
}
