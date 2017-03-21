const express = require('express')
const router = express.Router()

const getRetiros = require('./handlers/getByRetiros')
const deleteById = require('./handlers/deleteById')
const updateById = require('./handlers/editedById')
const ShowDetails = require('./handlers/ShowDetails')
const getOnlyRetiro = require('./handlers/getByonlyRetiro')
const getDetails = require('./handlers/getDetails')

router.get('/retiros/:tipo', getRetiros) // Filtramos resultados de tipos
router.delete('/acount', deleteById) // eliminar evento
router.get('/details', ShowDetails) // Muestra el detalle completo del evento
router.put('/retiros/edited/:id', updateById) //
router.get('/retiros/edited/:id', getOnlyRetiro)
router.get('/details/:id', getDetails)
module.exports = router
