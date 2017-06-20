$(document).ready(function () {
  var busqueda = $('#busqueda')
  var titulo = $('.events-link div.cousin')
        // A continuación añadimos la siguiente sintaxis:

  $(titulo).each(function () {
    var cousin = $(this)
            // si presionamos la tecla
    $(busqueda).keyup(function () {
            // cambiamos a minusculas
      this.value = this.value.toLowerCase()
                //
      var clase = $('.encuentra i')

      if ($(busqueda).val() != '' && $(titulo).filter(':visible')) {
        $(clase).attr('class', 'fa fa-times')
        $('.resultado').text('Total encontrados: ' + $('.events-link').filter(':visible').length)
      } else {
        $(clase).attr('class', 'fa fa-search')
      }
      if ($(clase).hasClass('fa fa-times')) {
        $(clase).click(function () {
          $('.resultado').text('Total encontrados: ' + $('.events-link').filter(':visible').length)
                        // borramos el contenido del input
          $(busqueda).val('')
                        // mostramos todas las listas

          $(cousin).parent().show()
          $('.resultado').text('Total encontrados: ' + $('.events-link').filter(':visible').length)
                        // volvemos a añadir la clase para mostrar la lupa
          $(clase).attr('class', 'fa fa-search')
        })
      }
            // ocultamos toda la lista
      $(cousin).parent().hide()

            // Si el resultado obtenido es 0 mantenemos el footer a sitio
      var footer = $('.footer')
      var results = $('.events-link').filter(':visible').length

      if (results === 0) {
        footer.css('margin-top', '520px')
      } else {
        footer.css('margin-top', '50px')
      }

      $('.resultado').text('Total encontrados: ' + $('.events-link').filter(':visible').length)
                // valor del h
      var txt = $(this).val()
                // si hay coincidencias en la búsqueda cambiando a minusculas
      if ($(cousin).text().toLowerCase().indexOf(txt) > -1) {
                // mostramos las listas que coincidan
        $(cousin).parent().show()
        $('.resultado').text('Total encontrados: ' + $('.events-link').filter(':visible').length)
      }
    })
  })
})
