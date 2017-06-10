
const express = require('express')
const router = express.Router()

// -------------REQUIRES GENERAL-----------------------------------------------
const Home = require('./handlers/getHome')
const login = require('./handlers/show-login')

// ------------REQUIRES RETIROS------------------------------------------------------
const getRetiros = require('./handlers/retiros/getRetiros')
const showFormRetiro = require('./handlers/retiros/showForm')
const addRetiros = require('./handlers/retiros/addRetiros')
const myAcountRetiro = require('./handlers/retiros/getCategories')

// ------------REQUIRES TALLERES------------------------------------------------------
const getTalleres = require('./handlers/talleres/getTalleres')
const showFormTaller = require('./handlers/talleres/showForm')
const addTalleres = require('./handlers/talleres/addTalleres')
const myAcountTaller = require('./handlers/talleres/getCategories')

// ------------REQUIRES INSTRUCTORES------------------------------------------------------
const getInstructor = require('./handlers/instructores/getInstructores')
const showFormInstructor = require('./handlers/instructores/showForm')
const addInstructor = require('./handlers/instructores/addInstructores')
const myAcountInstructor = require('./handlers/instructores/getCategories')

// ------------REQUIRES FORMACIONES------------------------------------------------------
const getFormacion = require('./handlers/formaciones/getFormaciones')
const showFormFormacion = require('./handlers/formaciones/showForm')
const addFormacion = require('./handlers/formaciones/addFormaciones')
const myAcountFormacion = require('./handlers/formaciones/getCategories')

// ------------REQUIRES CONFERENCIAS------------------------------------------------------
const getConferencia = require('./handlers/conferencias/getConferencias')
const showFormConferencia = require('./handlers/conferencias/showForm')
const addConferencia = require('./handlers/conferencias/addConferencias')
const myAcountConferencia = require('./handlers/conferencias/getCategories')

// ------------END POINTS GENERAL-------------------------------------------
router.get('/', Home) // 1 ruta muestra home
router.get('/login', login)

// ------------END POINTS RETIROS--------------------------------------------
router.get('/retiros', getRetiros) // Muestra todos los retiros
router.get('/acount', myAcountRetiro) // Entramos en la cuenta personal
router.get('/acount-retiro/empty', showFormRetiro) // Vemos el formulario vacio
router.post('/acount-retiro/add', addRetiros) // Guardamos los datos del formulario

// ------------END POINTS TALLERES--------------------------------------------
router.get('/talleres', getTalleres) // Muestra todos los retiros
router.get('/acount', myAcountTaller) // Entramos en la cuenta personal
router.get('/acount-taller/empty', showFormTaller) // Vemos el formulario vacio
router.post('/acount-taller/add', addTalleres) // Guardamos los datos del formulario

// ------------END POINTS INSTRUCTORES--------------------------------------------
router.get('/instructores', getInstructor) // Muestra todos los retiros
router.get('/acount', myAcountInstructor) // Entramos en la cuenta personal
router.get('/acount-instructor/empty', showFormInstructor) // Vemos el formulario vacio
router.post('/acount-instructor/add', addInstructor) // Guardamos los datos del formulario

// ------------END POINTS FORMACIONES--------------------------------------------
router.get('/formaciones', getFormacion) // Muestra todos los retiros
router.get('/acount', myAcountFormacion) // Entramos en la cuenta personal
router.get('/acount-formacion/empty', showFormFormacion) // Vemos el formulario vacio
router.post('/acount-formacion/add', addFormacion) // Guardamos los datos del formulario

// ------------END POINTS CONFERENCIAS--------------------------------------------
router.get('/conferencias', getConferencia) // Muestra todos los retiros
router.get('/acount', myAcountConferencia) // Entramos en la cuenta personal
router.get('/acount-conferencia/empty', showFormConferencia) // Vemos el formulario vacio
router.post('/acount-conferencia/add', addConferencia) // Guardamos los datos del formulario

module.exports = router

