
const express = require('express')
const router = express.Router()

// const getAll = require('./handlers/getAll')
const Home = require('./handlers/retiros/getHome')
const getRetiros = require('./handlers/retiros/getRetiros')
const showForm = require('./handlers/retiros/showForm')
const addRetiros = require('./handlers/retiros/addRetiros')
const myAcount = require('./handlers/retiros/getCategories')
const login = require('./handlers/retiros/show-login')

// const showAcount = require('./handlers/ShowAcount')

router.get('/', Home) // 1 ruta muestra home
router.get('/retiros', getRetiros) // Muestra todos los retiros
router.get('/acount', myAcount) // Entramos en la cuenta personal
router.get('/acount/empty', showForm) // Vemos el formulario vacio
router.post('/acount/add', addRetiros) // Guardamos los datos del formulario
router.get('/login', login)

// router.get('/acount', showAcount) // entrar en la zona privada
// router.get('/', getAl) // localhost:3010/clients
// router.post('/add', addRetiros)

module.exports = router

