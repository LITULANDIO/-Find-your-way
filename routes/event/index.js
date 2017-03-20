const express = require('express')
const router = express.Router()

const getRetiros = require('./handlers/getByRetiros')
const deleteById = require('./handlers/deleteById')
const updateById = require('./handlers/editedById')
const ShowDetails = require('./handlers/ShowDetails')

router.get('/retiros/:tipo', getRetiros) // Filtramos resultados de tipos
router.put('/retiros/edited/', updateById) //
router.delete('/acount', deleteById) // eliminar evento
router.get('/details', ShowDetails)

module.exports = router
