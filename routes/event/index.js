const express = require('express')
const router = express.Router()

const getRetiros = require('./handlers/getByRetiros')
const deleteById = require('./handlers/deleteById')
const updateById = require('./handlers/editedById')
const ShowDetails = require('./handlers/ShowDetails')
const getOnlyRetiro = require('./handlers/getByonlyRetiro')
const getDetails = require('./handlers/getDetails')

// -----------------------------------END POINTS-----------------------------------------------------------

router.get('/retiros/:tipo', getRetiros) // Filtramos resultados de tipos
router.delete('/acount', deleteById) // eliminar evento
router.get('/details', ShowDetails) // Muestra el detalle completo del evento
router.put('/retiros/edited/:id', updateById) // editamos evento metodo put
router.get('/retiros/edited/:id', getOnlyRetiro) //
router.get('/details/:id', getDetails) // renderizamos info detallada del evento
// router.get('/retiros/add', getOnlyRetiro)
module.exports = router
