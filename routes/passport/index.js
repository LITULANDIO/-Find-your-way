// Archivo de configuracion para la autentificacion con el modulo passport
const passport = require('passport')

const passportConfig = function (server) {
  server.use(passport.initialize())
  server.use(passport.session())
  console.log('Estoy configurando passport')
  passport.serializeUser(function (user, done) {
    done(null, user) // req.user
  })
  passport.deserializeUser(function (user, done) {
    done(null, user) // req.user
  })
}

module.exports = passportConfig
