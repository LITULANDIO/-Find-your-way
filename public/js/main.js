// DELETE RETIRO

  $('.remove').on('click', function (e) {
    e.preventDefault()
    const url = '/retiros/delete'
    const method = 'DELETE'
    const id = $(this).attr('data-id')
    const data = { id }

    $.ajax({ url, method, data })
    .then(() => {
      $(this).closest('.retiro').remove()
    })

    .catch(() => console.log('Error!!'))
  })

// DELETE FORMACION
  $('.remove').on('click', function (e) {
    e.preventDefault()
    const url = '/formaciones/delete'
    const method = 'DELETE'
    const id = $(this).attr('data-id')
    const data = { id }

    $.ajax({ url, method, data })
    .then(() => {
      $(this).closest('.formacion').remove()
    })

    .catch(() => console.log('Error!!'))
  })

  // DELETE TALLER

  $('.remove').on('click', function (e) {
    e.preventDefault()
    const url = '/talleres/delete'
    const method = 'DELETE'
    const id = $(this).attr('data-id')
    const data = { id }

    $.ajax({ url, method, data })
    .then(() => {
      $(this).closest('.taller').remove()
    })

    .catch(() => console.log('Error!!'))
  })

// DELETE CONFERENCIA
  $('.remove').on('click', function (e) {
    e.preventDefault()
    const url = '/conferencias/delete'
    const method = 'DELETE'
    const id = $(this).attr('data-id')
    const data = { id }

    $.ajax({ url, method, data })
    .then(() => {
      $(this).closest('.conferencia').remove()
    })

    .catch(() => console.log('Error!!'))
  })

// DELETE INSTRUCTOR
  $('.remove').on('click', function (e) {
    e.preventDefault()
    const url = '/instructores/delete'
    const method = 'DELETE'
    const id = $(this).attr('data-id')
    const data = { id }

    $.ajax({ url, method, data })
    .then(() => {
      $(this).closest('.instructor').remove()
    })

    .catch(() => console.log('Error!!'))
  })

// UPDATE

  $('form.edit-retiro').on('submit', function (e) {
    const method = $(this).attr('method')
    if (method === 'PUT') {
      e.preventDefault()
      const $form = $(this)
      const title = $form.find('input[name="title"]').val()
      const image = $form.find('input[name="image_item"]').val()
      const road = $form.find('select[name="road"]').val()
      const comunity = $form.find('select[name="comunity"]').val()
      const localitation = $form.find('input[name="localitation"]').val()
      const mision = $form.find('input[name="mision"]').val()
      const long = $form.find('input[name="long"]').val()
      const lat = $form.find('input[name="lat"]').val()
      const startDate = $form.find('input[name="startDate"]').val()
      const timeHourStart = $form.find('select[name="timeHourStart"]').val()
      const timeMinuteStart = $form.find('select[name="timeMinuteStart"]').val()
      const endDate = $form.find('input[name="endDate"]').val()
      const timeHourEnd = $form.find('select[name="timeHourEnd"]').val()
      const timeMinuteEnd = $form.find('select[name="timeMinuteEnd"]').val()
      const description = $form.find('textarea[name="description"]').val()
      const price = $form.find('input[name="price"]').val()
      const tel = $form.find('input[name="tel"]').val()
      const web = $form.find('input[name="web"]').val()
      const tags = $form.find('input[name="tags"]').val()

      const url = this.action
      const data = `title=${title}&imageUrl=${image}&road=${road}&comunity=${comunity}&localitation=${localitation}&mision=${mision}&long=${long}&lat=${lat}&startDate=${startDate}&timeHourStart=${timeHourStart}&timeMinuteStart=${timeMinuteStart}&endDate=${endDate}&timeHourEnd=${timeHourEnd}&timeMinuteEnd=${timeMinuteEnd}&description=${description}&price=${price}&tel=${tel}&web=${web}&tags=${tags}`

      $.ajax({ url, data, method })
        .then(() => window.location = '/acount')
        .catch(() => console.log('Error!!'))
    }
  })

