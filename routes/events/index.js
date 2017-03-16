const express = require('express')
const router = express.Router()

// const getAll = require('./handlers/getAll')
const Home = require('./handlers/getHome')
const getRetiros = require('./handlers/getRetiros')
// const showAcount = require('./handlers/ShowAcount')
// const addRetiros = require('./handlers/addRetiros')
// const showForm = require('./handlers/showForm')

router.get('/', Home) // 1 ruta muestra home
router.get('/retiros', getRetiros)
// router.get('/acount', showAcount) // entrar en la zona privada
// router.get('/', getAl) // localhost:3010/clients
// router.post('/add', addRetiros)
// router.get('/add', showForm)

module.exports = router

