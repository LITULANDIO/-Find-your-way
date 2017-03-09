const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static(__dirname + '/public/html'))

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/public/html/index.html')
// })

// app.listen(PORT, function () {
//   console.log('Runing...')
// })
