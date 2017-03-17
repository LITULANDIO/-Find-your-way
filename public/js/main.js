$('.edit').on('click', function (e) {
  $(this).parent().find('form').removeClass('hidden')
})

$('form.edit-task').on('submit', function (e) {
  e.preventDefault()
  const $form = $(this)
  const title = $form.find('input[name="title"]').val()
  const done = $form.find('input[name="done"]').is(':checked')

  const url = this.action
  const method = 'PUT'
  const data = `title=${title}&done=${done}`

  $.ajax({ url, method, data })
    .then(() => window.location.reload())
    .catch(() => console.log('Error!!'))
})

