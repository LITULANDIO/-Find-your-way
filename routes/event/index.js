const express = require('express')
const router = express.Router()

// ------------REQUIRES RETIROS------------------------------------------------------
const getRetiros = require('./handlers/retiros/getByRetiros')
const deleteByIdRetiro = require('./handlers/retiros/deleteById')
const updateByIdRetiro = require('./handlers/retiros/editedById')
const ShowDetailsRetiro = require('./handlers/retiros/ShowDetails')
const getOnlyRetiro = require('./handlers/retiros/getByonlyRetiro')
const getDetailsRetiro = require('./handlers/retiros/getDetails')

// ------------REQUIRES TALLERES------------------------------------------------------
const getTalleres = require('./handlers/talleres/getByRetiros')
const deleteByIdTaller = require('./handlers/talleres/deleteById')
const updateByIdTaller = require('./handlers/talleres/editedById')
const ShowDetailsTaller = require('./handlers/talleres/ShowDetails')
const getOnlyTaller = require('./handlers/talleres/getByonlyRetiro')
const getDetailsTaller = require('./handlers/talleres/getDetails')

// ------------REQUIRES FORMACIONES------------------------------------------------------
const getFormaciones = require('./handlers/formaciones/getByRetiros')
const deleteByIdFormaciones = require('./handlers/formaciones/deleteById')
const updateByIdFormaciones = require('./handlers/formaciones/editedById')
const ShowDetailsFormaciones = require('./handlers/formaciones/ShowDetails')
const getOnlyFormaciones = require('./handlers/formaciones/getByonlyRetiro')
const getDetailsFormaciones = require('./handlers/formaciones/getDetails')

// ------------REQUIRES CONFERENCIAS------------------------------------------------------
const getConferencias = require('./handlers/Conferencias/getByRetiros')
const deleteByIdConferencias = require('./handlers/Conferencias/deleteById')
const updateByIdConferencias = require('./handlers/Conferencias/editedById')
const ShowDetailsConferencias = require('./handlers/Conferencias/ShowDetails')
const getOnlyConferencias = require('./handlers/Conferencias/getByonlyRetiro')
const getDetailsConferencias = require('./handlers/Conferencias/getDetails')

// ------------REQUIRES INSTRUCTORES------------------------------------------------------
const getInstructores = require('./handlers/Instructores/getByRetiros')
const deleteByIdInstructores = require('./handlers/Instructores/deleteById')
const updateByIdInstructores = require('./handlers/Instructores/editedById')
const ShowDetailsInstructores = require('./handlers/Instructores/ShowDetails')
const getOnlyInstructores = require('./handlers/Instructores/getByonlyRetiro')
const getDetailsInstructores = require('./handlers/Instructores/getDetails')

// -----------------------------------END POINTS RETIROS-----------------------------------------------------------

router.get('/retiros/:tipo', getRetiros) // Filtramos resultados de tipos
router.delete('/acount', deleteByIdRetiro) // eliminar evento
router.get('/details', ShowDetailsRetiro) // Muestra el detalle completo del evento
router.put('/retiros/edited/:id', updateByIdRetiro) // editamos evento metodo put
router.get('/retiros/edited/:id', getOnlyRetiro) //
router.get('/details/:id', getDetailsRetiro) // renderizamos info detallada del evento
// router.get('/retiros/add', getOnlyRetiro)

// -----------------------------------END POINTS TALLERES-----------------------------------------------------------

router.get('/talleres/:tipo', getTalleres) // Filtramos resultados de tipos
router.delete('/acount', deleteByIdTaller) // eliminar evento
router.get('/details', ShowDetailsTaller) // Muestra el detalle completo del evento
router.put('/talleres/edited/:id', updateByIdTaller) // editamos evento metodo put
router.get('/talleres/edited/:id', getOnlyTaller) //
router.get('/details/:id', getDetailsTaller) // renderizamos info detallada del evento
// router.get('/retiros/add', getOnlyRetiro)

// -----------------------------------END POINTS FORMACIONES-----------------------------------------------------------

router.get('/formaciones/:tipo', getFormaciones) // Filtramos resultados de tipos
router.delete('/acount', deleteByIdFormaciones) // eliminar evento
router.get('/details', ShowDetailsFormaciones) // Muestra el detalle completo del evento
router.put('/formaciones/edited/:id', updateByIdFormaciones) // editamos evento metodo put
router.get('/formaciones/edited/:id', getOnlyFormaciones) //
router.get('/details/:id', getDetailsFormaciones) // renderizamos info detallada del evento
// router.get('/retiros/add', getOnlyRetiro)

// -----------------------------------END POINTS CONFERENCIAS-----------------------------------------------------------

router.get('/conferencias/:tipo', getConferencias) // Filtramos resultados de tipos
router.delete('/acount', deleteByIdConferencias) // eliminar evento
router.get('/details', ShowDetailsConferencias) // Muestra el detalle completo del evento
router.put('/conferencias/edited/:id', updateByIdConferencias) // editamos evento metodo put
router.get('/conferencias/edited/:id', getOnlyConferencias) //
router.get('/details/:id', getDetailsConferencias) // renderizamos info detallada del evento
// router.get('/retiros/add', getOnlyRetiro)

// -----------------------------------END POINTS INSTRUCTORES-----------------------------------------------------------

router.get('/Instructores/:tipo', getInstructores) // Filtramos resultados de tipos
router.delete('/acount', deleteByIdInstructores) // eliminar evento
router.get('/details', ShowDetailsInstructores) // Muestra el detalle completo del evento
router.put('/Instructores/edited/:id', updateByIdInstructores) // editamos evento metodo put
router.get('/Instructores/edited/:id', getOnlyInstructores) //
router.get('/details/:id', getDetailsInstructores) // renderizamos info detallada del evento
// router.get('/retiros/add', getOnlyRetiro)
module.exports = router
