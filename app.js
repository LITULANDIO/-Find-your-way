const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routerEvents = require('./routes/events') // routes
mongoose.Promise = global.Promise // configuration

const PORT = process.env.PORT || 3000
const urlDB = process.env.DB_URI || 'mongodb://admin:admin@ds129010.mlab.com:29010/db_encuentra'
const app = express()

app.locals.moment = require('moment')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug')

// app.use(express.static('public'))
// app.use(express.static(__dirname + '/public'))
app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(urlDB)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'ERROR'))
db.once('open', () => { console.log('CONNECTED') })
app.use('/', routerEvents)
// app.use('/client', routerClient)

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/public/html/index.html')
// })

app.listen(PORT, () => console.log(`Running on PORT ${PORT}...`))
