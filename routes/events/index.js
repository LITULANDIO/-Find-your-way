const express = require('express')
const router = express.Router()

// const getAll = require('./handlers/getAll')
// const addEvents = require('./handlers/addEvents')
const showForm = require('./handlers/showForm')
const showAcount = require('./handlers/getCategories')
const Home = require('./handlers/getHome')

router.get('/', Home)
// router.get('/', getAl) // localhost:3010/clients
// router.post('/', addEvent)
router.get('/add', showForm)
router.get('/acount', showAcount)

module.exports = router

