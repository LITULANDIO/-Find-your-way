module.exports = (req, res) => {
  const { user } = req
  res.render('add-event-formacion', {user: user})
}
