window.onload = function () {
  // Funcion que muestra la ubicacion de los objetos en Google Maps
  var map

  var lat = document.getElementsByClassName('lat')
  var long = document.getElementsByClassName('long')

// almaceno las coordenadas en un array de objetos
  var coord = []
  for (var i = 0; i < lat.length; i++) {
    coord.push({lat: Number(lat[i].innerHTML), lng: Number(long[i].innerHTML)})
  }

  var tit = document.getElementsByClassName('namer')

// almaceno en un array los titulos de los eventos
  var titulos = []

  for (var i = 0; i < tit.length; i++) {
    titulos.push(String(tit[i].innerHTML))

    var info = titulos[i]
  }

// autocomplete en el input

  // var input = document.getElementById('pac-input')

  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)

  // var autocomplete = new google.maps.places.Autocomplete(input, options)

  viewMap()

  /**
  * helpers functions
  */
  function viewMap () {
    // Objeto utilizado para la manipulación de las opciones del mapa.
    var mapOptions = {
      zoom: 6,
      center: { lat: 40.4830106, lng: -4.087557299999958 },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    }

    // construyo el mapa
    map = new google.maps.Map(document.getElementById('maps'), mapOptions)

    addMarkers()
  }

  // var infowindow = new google.maps.InfoWindow({
  //   content: info
  // })
  var image = '/img/marker1.gif'
  var icon = {
    url: place.icon,
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(25, 25)
  }

  function addMarker (m_position, m_title) {
    window.setTimeout(function () {
      var marker = new google.maps.Marker({
        position: m_position,
        icon: image,
        map: map,
        animation: google.maps.Animation.DROP,
        title: m_title

      })
      marker.addListener('click', function () {
        infowindow.open(map, marker)
      })
    }, 1000)
  }

  // agrego multiples POIs al mapa
  function addMarkers () {
    for (var i = 0; i < coord.length; i++) {
      var location = { lat: coord[i].lat, lng: coord[i].lng }
      addMarker(location, titulos[i])
    }
  }

// var geocoder = new google.maps.Geocoder()
// var infowindow = new google.maps.InfoWindow()

// $('#address').keypress(function (e) {
//   if (e.which == 13) {
//           // Acciones a realizar, por ej: enviar formulario.
//     geocodeAddress(geocoder, map, infowindow)
//   }
// })
// function geocodeAddress (geocoder, resultsMap) {
//   var address = document.getElementById('address').value
//   geocoder.geocode({'address': address}, function (results, status) {
//     if (status === google.maps.GeocoderStatus.OK) {
//       resultsMap.setCenter(results[0].geometry.location)
// }})
}
