const express = require('express')
const router = express.Router()

const getRetiros = require('./handlers/getByRetiros')
// const removeById = require('./handlers/removeById')
const updateById = require('./handlers/editedById')

router.get('/retiros/:tipo', getRetiros) // Filtramos resultados de tipos
// router.delete('/:id', removeById)
router.put('/retiros/edited/:id', updateById) //

module.exports = router
