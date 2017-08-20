const express = require('express')  // importamos el modulo express
const path = require('path')
const bodyParser = require('body-parser') // modulo para acceder a los datos del post
const mongoose = require('mongoose') // requerimos mongoose después de su isntalación npm
const method_override = require('method-override')// modulo para sobreescrivir rutas
const multer = require('multer')// modulo para cargar las imagenes temporales
const formidable = require('express-formidable') // modulo para subir archivos al servidor
mongoose.Promise = require('bluebird')

const routerEvents = require('./routes/events') // routes --> consideraciones generales
const routerEvent = require('./routes/event') // routes --> consideraciones concretas
mongoose.Promise = global.Promise // configuration por defecto de mongoose

const PORT = process.env.PORT || 3000 // especificamos el puerto con una variable de entorno
const urlDB = process.env.DB_URI || 'mongodb://admin:admin@ds129010.mlab.com:29010/db_encuentra' // especificamos la url donde se ubiaca la bd mediante una variable de entorno
const app = express() // creamos el servidor

app.locals.moment = require('moment') // requerimos la libreria moments

// app.use Middleware --> es una función conectora
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // middleware que requerimos para poder utilizar el método post y recoger los valores del formulario
app.use(multer({dest: './uploads'}).single('image_item'))
app.use(method_override('_method'))
app.set('view engine', 'pug') // declaramos que en la carpeta view (dinámica) se encuentran  las paginas apunto para ser renderizadas con pug

//* **** Authorization part *********
const authRouter = require('./routes/auth')

app.use(authRouter)
// app.use('/acount', loggedIn, routerEvents)
app.get('/acount', loggedIn, routerEvents)
    // do something only if user is authenticated

//* **********************************
// Los end points devuelven html o json renderizado --> app.route

app.use(express.static(path.join(__dirname, 'public'))) // Especificamos donde se encuentran los archivos estáticos
// path acceso de ruta
mongoose.connect(urlDB) // conectamos con la bd mediante mongoose con la url especificada
const db = mongoose.connection
db.on('error', console.error.bind(console, 'ERROR')) // comprovamos si existe un error en la conexión
db.once('open', () => { console.log('CONNECTED') }) // si la conexión es correcta  enviamos un console.log

app.use('/', routerEvents) // middleware especificando la ruta donde encontraremos el indice de rutas
app.use('/', routerEvent) //

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/public/html/index.html')
// })
function loggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/')
  }
}

app.listen(PORT, () => console.log(`Running on PORT ${PORT}...`)) // llamamos al puerto

// heroku es un serviicio de housting con unaa version gratuita, el problema es que no tiene permisos
// de escritura,con lo cual no se pueden subir imagenes ya que no deja escribir en el servidor.
// Para ello usaremos un servicio de housting de imaganes llamado clodinary, permite editar.
// intalar el npm la libreria cloudinary, y con una linea de codigo
