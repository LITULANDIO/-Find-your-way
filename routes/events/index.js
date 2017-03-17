const express = require('express')
const router = express.Router()

// const getAll = require('./handlers/getAll')
const Home = require('./handlers/getHome')
const getRetiros = require('./handlers/getRetiros')
const showForm = require('./handlers/showForm')
const addRetiros = require('./handlers/addRetiros')
const myAcount = require(('./handlers/getCategories'))
// const showAcount = require('./handlers/ShowAcount')

router.get('/', Home) // 1 ruta muestra home
router.get('/retiros', getRetiros)
router.get('/acount', myAcount)
router.get('/retiros/add', showForm)
router.post('/retiros', addRetiros)
// router.get('/acount', showAcount) // entrar en la zona privada
// router.get('/', getAl) // localhost:3010/clients
// router.post('/add', addRetiros)

module.exports = router

