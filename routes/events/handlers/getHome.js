module.exports = (req, res) => {
  const { user } = req
  res.render('home', {user: user})
}
