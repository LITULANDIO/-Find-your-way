const express = require('express')
const passport = require('passport')
const Account = require('../../models/counts')

const router = express.Router()

const LocalStrategy = require('passport-local').Strategy

const session = require('express-session') // modulo para control de session para login
const cookieParser = require('cookie-parser') // modulo para configurar cookies

router.use(cookieParser())
router.use(session({
  secret: 'supersecretworddonottelltoanyone',
  resave: true,
  saveUninitialized: true
}))

// Configure passport middleware
router.use(passport.initialize())
router.use(passport.session())

passport.use(new LocalStrategy(Account.authenticate()))
passport.serializeUser(Account.serializeUser())
passport.deserializeUser(Account.deserializeUser())

// These get routes will be handled with modal windows in the client
// router.get('/register', (req, res) => res.render('register'))
// router.get('/login', (req, res) => res.render('login'))

router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log(req.user.username)
  res.render('myAcount')
})

router.post('/register', function (req, res, next) {
  const { username, password, email } = req.body
  const count = new Account({ username, email, password })

  Account.register(count, password, function (err) {
    if (err) {
      console.log('error while user register!', err)
      return next(err)
    }

    console.log('user registered!')
    res.redirect('/login')
  })
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
