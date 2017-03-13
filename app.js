const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routerClients = require('./routes/clients') // routes
mongoose.Promise = global.Promise // configuration

const PORT = process.env.PORT || 3000
const urlDB = process.envDB_URI || 'mongodb://admin:admin@ds129010.mlab.com:29010/db_encuentra'
const app = express()

app.locals.moment = require('moment')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug')
app.use(express.static('public'))

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
