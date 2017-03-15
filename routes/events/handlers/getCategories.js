const Event = require('../../../models/events')

module.exports = (req, res) => {
  Event.find()
    .then(events => res.render('myAcount', { events }))
    .catch(err => { throw err })
}
