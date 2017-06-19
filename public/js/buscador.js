$(document).ready(function () {
  var busqueda = $('#busqueda')
  var titulo = $('.events-link div.cousin')
// A continuación añadimos la siguiente sintaxis:

  $(titulo).each(function () {
    var h2 = $(this)
// si presionamos la tecla
    $(busqueda).keyup(function () {
// cambiamos a minusculas
      this.value = this.value.toLowerCase()
//
      var clase = $('.encuentra i')
      if ($(busqueda).val() != '') {
        $(clase).attr('class', 'fa fa-times')
      } else {
        $(clase).attr('class', 'fa fa-search')
      }
      if ($(clase).hasClass('fa fa-times')) {
        $(clase).click(function () {
// borramos el contenido del input
          $(busqueda).val('')
// mostramos todas las listas
          $(h2).parent().show()
// volvemos a añadir la clase para mostrar la lupa
          $(clase).attr('class', 'fa fa-search')
        })
      }
// ocultamos toda la lista
      $(h2).parent().hide()
// valor del h3
      var txt = $(this).val()
// si hay coincidencias en la búsqueda cambiando a minusculas
      if ($(h2).text().toLowerCase().indexOf(txt) > -1) {
// mostramos las listas que coincidan
        $(h2).parent().show()
      }
    })
  })

  // const url = '/retiros'
  // const method = 'GET'
  // const data = { retiros }

  // $.ajax({ url, method, data })
  //   .then(() => {
  //     $(this).closest('.instructor').remove()
  //   })

  //   .catch(() => console.log('Error!!'))
})

