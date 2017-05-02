
const express = require('express')
const router = express.Router()

// const getAll = require('./handlers/getAll')
const Home = require('./handlers/getHome')
const getRetiros = require('./handlers/getRetiros')
const showForm = require('./handlers/showForm')
const addRetiros = require('./handlers/addRetiros')
const myAcount = require('./handlers/getCategories')
const login = require('./handlers/show-login')
const user = require('./handlers/adduser')

// const showAcount = require('./handlers/ShowAcount')

router.get('/', Home) // 1 ruta muestra home
router.get('/retiros', getRetiros) // Muestra todos los retiros
router.get('/acount', myAcount) // Entramos en la cuenta personal
router.get('/retiros/add', showForm) // Vemos el formulario vacio
router.post('/retiros', addRetiros) // Guardamos los datos del formulario
router.get('/login', login)
router.post('/acount', user)

// router.get('/acount', showAcount) // entrar en la zona privada
// router.get('/', getAl) // localhost:3010/clients
// router.post('/add', addRetiros)

module.exports = router
