const passport = require('passport')
const localStrategy = require('passport-local').Strategy // estrategia de passport local

const localConfig = function (server) {
  passport.use(new localStrategy({ // crear una nueva instancia de Strategy
    usernameField: 'username',   // Autentificacion por defecto
    passwordField: 'password'
  },
  function (username, password, done) { //
    console.log(username)
    console.log(password)
  }

  ))

  server.post('/login', passport.authenticate('local', {
    successRedirect: '/myAcount', // url si el login es correcto
    failureRedirect: '/' // url si el login es incorrecto
  })) // Ruta para la autentificacion
}

module.exports = localConfig
