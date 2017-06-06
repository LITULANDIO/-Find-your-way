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
router.post('/register', function (req, res, next) {
  const { username, password, email } = req.body
  const count = new Account({ username, email, password })

  var post = req.body
  var validation_errors = []
  var validation_succes = []

  if (!post.username) validation_errors.push('El nombre de usuario no puede estar vacío')
  if (!post.password) validation_errors.push('La contraseña no puede estar vacía')
  if (!post.email) validation_errors.push('El email no puede estar vacío')
  // if (post.username === username) validation_errors.push('Lo sentimos, el nombre de usuario ya exite, vuelva a insertar un nuevo nombre de usuario. Gracias!')
  if (validation_errors.length) {
    return res.render('login-register', {validationErrors: validation_errors})
  }

  if (post.username === username) validation_errors.push('Lo sentimos el nombre de usuario ya existe, escriba un nuevo nombre de ussuario, gracias!')

  Account.register(count, password, function (err) {
    if (err) {
      console.log('error while user register!', err)
      return res.render('login-register', {validationErrors: validation_errors})
    }

    console.log('user registered!')
    res.redirect('/login')
  })
})

  // var post = req.body
  // var validation_errors = []
  // var validation_succes = []

  // if (!post.username) validation_errors.push('El nombre de usuario no puede estar vacío')
  // if (!post.password) validation_errors.push('La contraseña no puede estar vacía')
  // if (!post.email) validation_errors.push('El email no puede estar vacío')
  // // if (post.username === username) validation_errors.push('Lo sentimos, el nombre de usuario ya exite, vuelva a insertar un nuevo nombre de usuario. Gracias!')
  // if (validation_errors.length) {
  //   return res.render('login-register', {validationErrors: validation_errors})
  // }

//   Account.create(post, function (err, result) {
//     if (err) throw err
//     req.login(result, function (err) {
//       if (err) throw err
//       res.redirect('/login')
//     })
//   })
// })

  // if (post.username)&&(post.password)&&(post.email) validation_succes.push('Usuario registrado correctamente')
  // if (validation_succes.length)
  //   return res.render('login-register', {validationSucces: validation_succes})
  // console.log(validation_errors)

// LOGOUT
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
