const Event = require('../../../models/events')

module.exports = (req, res) => {
  Event.find().limit(4)
    .then(event => res.json(event))
    .catch(err => { throw err })
}
