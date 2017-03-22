const Retiro = require('../../../models/retiros')

module.exports = (req, res) => {
  const { id } = req.params

  Retiro.findById(id)
    .then(retiros => {
    	const action = '/retiros/edited/' + id
    	const method = 'PUT'
    	const edited = 'Modificar'
    	console.log(retiros)
    	res.render('add-event', { retiros, action, method, edited })
    })
    .catch(err => { throw err })
  console.log(id)
}

