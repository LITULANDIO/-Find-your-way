const Event = require('../../../models/events')

module.exports = (req, res) => {
  Event.find()
    .then(event => res.json(event))
    .catch(err => { throw err })
}
