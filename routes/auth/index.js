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

  Account.register(count, password, function (err) {
    if (err) {
      console.log('error while user register!', err)
      return res.json({success: false, msg: 'Username already exists.'})
    }

    console.log('user registered!')
    res.redirect('/login')
  })
})

// LOGOUT
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
