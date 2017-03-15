const express = require('express')
const router = express.Router()

const getRetiros = require('./handlers/getByRetiros')
// const removeById = require('./handlers/removeById')
// const updateById = require('./handlers/updateById')

router.get('/:retiros', getRetiros)
// router.delete('/:id', removeById)
// router.put('/:id', updateById)

module.exports = router
