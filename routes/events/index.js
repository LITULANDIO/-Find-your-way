
const express = require('express')
const router = express.Router()

// -------------REQUIRES GENERAL-----------------------------------------------
const Home = require('./handlers/getHome')
const login = require('./handlers/show-login')
const myAcount = require('./handlers/getCategories')

// ------------REQUIRES RETIROS------------------------------------------------------
const getRetiros = require('./handlers/retiros/getRetiros')
const showFormRetiro = require('./handlers/retiros/showForm')
const addRetiros = require('./handlers/retiros/addRetiros')

// ------------REQUIRES TALLERES------------------------------------------------------
const getTalleres = require('./handlers/talleres/getTalleres')
const showFormTaller = require('./handlers/talleres/showForm')
const addTalleres = require('./handlers/talleres/addTalleres')

// ------------REQUIRES INSTRUCTORES------------------------------------------------------
const getInstructor = require('./handlers/instructores/getInstructores')
const showFormInstructor = require('./handlers/instructores/showForm')
const addInstructor = require('./handlers/instructores/addInstructores')

// ------------REQUIRES FORMACIONES------------------------------------------------------
const getFormacion = require('./handlers/formaciones/getFormaciones')
const showFormFormacion = require('./handlers/formaciones/showForm')
const addFormacion = require('./handlers/formaciones/addFormaciones')

// ------------REQUIRES CONFERENCIAS------------------------------------------------------
const getConferencia = require('./handlers/conferencias/getConferencias')
const showFormConferencia = require('./handlers/conferencias/showForm')
const addConferencia = require('./handlers/conferencias/addConferencias')

// ------------END POINTS GENERAL-------------------------------------------
router.get('/', Home) // 1 ruta muestra home
router.get('/login', login)
router.get('/acount', myAcount)

// ------------END POINTS RETIROS--------------------------------------------
router.get('/retiros', getRetiros) // Muestra todos los retiros
router.get('/acount-retiro/empty', showFormRetiro) // Vemos el formulario vacio
router.post('/acount-retiro/add', addRetiros) // Guardamos los datos del formulario

// ------------END POINTS TALLERES--------------------------------------------
router.get('/talleres', getTalleres) // Muestra todos los retiros
router.get('/acount-taller/empty', showFormTaller) // Vemos el formulario vacio
router.post('/acount-taller/add', addTalleres) // Guardamos los datos del formulario

// ------------END POINTS INSTRUCTORES--------------------------------------------
router.get('/instructores', getInstructor) // Muestra todos los retiros
router.get('/acount-instructor/empty', showFormInstructor) // Vemos el formulario vacio
router.post('/acount-instructor/add', addInstructor) // Guardamos los datos del formulario

// ------------END POINTS FORMACIONES--------------------------------------------
router.get('/formaciones', getFormacion) // Muestra todos los retiros
router.get('/acount-formacion/empty', showFormFormacion) // Vemos el formulario vacio
router.post('/acount-formacion/add', addFormacion) // Guardamos los datos del formulario

// ------------END POINTS CONFERENCIAS--------------------------------------------
router.get('/conferencias', getConferencia) // Muestra todos los retiros
router.get('/acount-conferencia/empty', showFormConferencia) // Vemos el formulario vacio
router.post('/acount-conferencia/add', addConferencia) // Guardamos los datos del formulario

module.exports = router

