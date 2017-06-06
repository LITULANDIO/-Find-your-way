$(document).ready(function () {
  $('#sel2').on('change', function () {
    event.preventDefault()
    var selectComunity = this.value
    $('#sel2').val(selectComunity)
  })

  if ($('#sel2').val() === 'Baleares') {
    console.log('IBIZAAAAAAAAAAAAAAAAAAAAA')

    var map

    function viewMap () {
    // Objeto utilizado para la manipulación de las opciones del mapa.
      var mapOptions = {
        zoom: 6,
        center: { lat: 39.5341789, lng: 2.857710499999939 },
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      map = new google.maps.Map(document.getElementById('maps'), mapOptions)
    }
    viewMap()
  } else {
    console.log('no pilla el mapa diosss')
  }
})
