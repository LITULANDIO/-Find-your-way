const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addEvents = require('./handlers/addEvents')
const showForm = require('./handlers/showForm')
const showAcount = require('./handlers/getCategories')

router.get('/', getAll) // localhost:3010/clients
router.post('/', addEvents)
router.get('/add', showForm)
router.get('/acount', showAcount)

module.exports = router

