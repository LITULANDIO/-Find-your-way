const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routerClients = require('./routes/clients') // routes
const routerClient = require('./routes/client')

mongoose.Promise = global.Promise // configuration

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const urlDB = 'mongodb://localhost:27017/BDencuentra'
mongoose.connect(urlDB)

app.use('/clients', routerClients)
// app.use('/client', routerClient)

app.use(express.static(__dirname + '/public'))

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/public/html/index.html')
// })

app.listen(process.env.PORT || PORT, function () {
  console.log('Runing...')
})
