const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')

router.get('/', getAll) // localhost:3010/clients

module.exports = router
