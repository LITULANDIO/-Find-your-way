module.exports = (req, res) => {
  const { user } = req
  res.render('add-event-conferencia', {user: user})
}
