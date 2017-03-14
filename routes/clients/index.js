const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addEvents = require('./handlers/addEvents')

router.get('/', getAll) // localhost:3010/clients
router.post('/', addEvents)

module.exports = router

