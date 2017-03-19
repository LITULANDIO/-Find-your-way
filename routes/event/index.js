const express = require('express')
const router = express.Router()

const getRetiros = require('./handlers/getByRetiros')
const deleteById = require('./handlers/deleteById')
const updateById = require('./handlers/editedById')
const getByRetiroId = require('./handlers/getByRetiroId')
const showDelete = require('./handlers/showDelete')

router.get('/retiros/:tipo', getRetiros) // Filtramos resultados de tipos
router.put('/retiros/edited/:id', updateById) //
router.delete('/acount/:id', deleteById) // eliminar evento
router.get('/acount:id', showDelete)
router.get('/acount:id', getByRetiroId)
module.exports = router
