const express = require('express')
const passport = require('passport')
const Account = require('../../models/counts')
const Retiros = require(('../../models/retiros'))

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
router.post('/acount', passport.authenticate('local', { session: true }), (req, res) => {
  console.log(req.user.username)
  res.redirect('acount')
})

// REGISTER
router.post('/register', function (req, res) {
  var post = req.body
  var validation_errors = []

  if (!post.username) validation_errors.push('El nombre de usuario no puede estar vacío')
  if (!post.password) validation_errors.push('La contraseña no puede estar vacía')
  if (!post.email) validation_errors.push('El email no puede estar vacío')
  if (validation_errors.length) return res.render('login-register', {validationErrors: validation_errors})
  console.log(validation_errors)

  Account.create(post, function (err, result) {
    if (err) throw err
    req.login(result, function (err) {
      if (err) throw err
      res.redirect('/login')
    })
  })
})

// LOGOUT
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
