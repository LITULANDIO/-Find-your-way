const express = require('express')
const passport = require('passport')
const Account = require('../../models/counts')
const flash = require('connect-flash')

const router = express.Router()

const LocalStrategy = require('passport-local').Strategy

const session = require('express-session') // modulo para control de session para login
const cookieParser = require('cookie-parser') // modulo para configurar cookies

router.use(cookieParser())
router.use(session({
  secret: 'supersecretworddonottelltoanyone',
  resave: false,
  saveUninitialized: true
}))

// Configure passport middleware
router.use(passport.initialize())
router.use(passport.session())
passport.use(new LocalStrategy(Account.authenticate()))
passport.serializeUser(Account.serializeUser())
passport.deserializeUser(Account.deserializeUser())

// LOGIN

router.post('/login',
  passport.authenticate('local', {
    session: true,
    successRedirect: '/acount',
    failureRedirect: '/login',
    failureFlash: true }))

// REGISTER
router.post('/register', function (req, res, next) {
  const { username, password, email } = req.body
  const count = new Account({ username, email, password })
  var post = req.body
  var validation_errors = []
  var validation_succes = []

  if (!post.username) validation_errors.push('El nombre de usuario no puede estar vacío')
  if (!post.password) validation_errors.push('La contraseña no puede estar vacía')
  if (!post.email) validation_errors.push('El email no puede estar vacío')

  if (validation_errors.length) {
    return res.render('login-register', {validationErrors: validation_errors})
  }

  if (post.username === username) validation_errors.push('Lo sentimos, el nombre de usuario ya existe, escriba un nuevo nombre de usuario, gracias!')

  Account.register(count, password, function (err) {
    if (err) {
      console.log('error while user register!', err)
      return res.render('login-register', {validationErrors: validation_errors})
    }
    if (post.username === username) validation_succes.push('Usuario Registrado! Bienvenid@ ' + post.username + ', ya puedes iniciar sesión.')

    return res.render('login-register', {validationSucces: validation_succes})
  })
})

// LOGOUT
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
