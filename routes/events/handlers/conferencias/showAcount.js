
module.exports = (req, res) => {
  const { user } = req
  res.render('myAcount', {user: user})
}

