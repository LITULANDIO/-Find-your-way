// DELETE

$(document).ready(function () {
  $('.remove').on('click', function (e) {
// e.preventDefault()
    const url = '/acount'
    const method = 'DELETE'
    const id = $(this).attr('data-id')
    const data = { id }

    $.ajax({ url, method, data })
    .then(() => {
      $(this).closest('.retiro').remove()
    })

    .catch(() => console.log('Error!!'))
  })

// UPDATE

  $('form.edit-retiro').on('submit', function (e) {
    e.preventDefault()
    const $form = $(this)
    const title = $form.find('input[name="title"]').val()
    const category = $form.find('select[name="category"]').val()
    const road = $form.find('select[name="road"]').val()
    const comunity = $form.find('select[name="cominity"]').val()
    const startDate = $form.find('select[name="startDate"]').val()
    const timeHourStart = $form.find('select[name="timeHourStart"]').val()
    const timeMinuteStart = $form.find('select[name="timeMinuteStart"]').val()
    const endDate = $form.find('select[name="endDate"]').val()
    const timeHourEnd = $form.find('select[name="timeHourEnd"]').val()
    const timeMinuteEnd = $form.find('select[name="timeMinuteEnd"]').val()
    const description = $form.find('input[name="description"]').val()
    const tags = $form.find('input[name="tags"]').val()

    const url = this.action
    const method = 'PUT'
    const data = `title=${title}&category=${category}&road=${road}&comunity=${comunity}&startDate=${startDate}&timeHourStart=${timeHourStart}&timeMinuteStart=${timeMinuteStart}&endDate=${endDate}&timeHourEnd=${timeHourEnd}&timeMinuteEnd=${timeMinuteEnd}&description=${description}&tags=${tags}`

    $.ajax({ url, method, data })
    .then(() => window.location.reload())
    .catch(() => console.log('Error!!'))
  })
})
