const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

// const collection = 'accounts'

const Account = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
})

Account.plugin(passportLocalMongoose)

module.exports = mongoose.model('counts', Account)
