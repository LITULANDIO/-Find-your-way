// Archivo de configuracion para la autentificacion con el modulo passport
const passport = require('passport')

const passportConfig = function (server) {
  server.use(passport.initialize())
  server.use(passport.session())

  passport.serializeUser(function (user, done) {
    done(null, user) // req.user
  })
  passport.deserializeUser(function (user, done) {
    done(null, user) // req.user
  })

  require('./local.js')(server)
}

module.exports = passportConfig
