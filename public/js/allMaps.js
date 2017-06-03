window.onload = function () {
  // Funcion que muestra la ubicacion de los objetos en Google Maps
  var map

  var lat = document.getElementsByClassName('lat')
  var long = document.getElementsByClassName('long')

  var coord = []
  for (var i = 0; i < lat.length; i++) {
    coord.push({lat: Number(lat[i].innerHTML), lng: Number(long[i].innerHTML)})
  }

  viewMap()

  /**
  * helpers functions
  */
  function viewMap () {
    // Objeto utilizado para la manipulación de las opciones del mapa.
    var mapOptions = {
      zoom: 5,
      center: { lat: 41.5911589, lng: 1.5208623999999418 },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    // construyo el mapa
    map = new google.maps.Map(document.getElementById('maps'), mapOptions)

    addMarkers()
  }

  function addMarker (m_position, m_title) {
    var marker = new google.maps.Marker({
      position: m_position,
      map: map,
      title: m_title
    })
  }

  // agrego multiples POIs al mapa
  function addMarkers () {
    for (var i = 0; i < coord.length; i++) {
      var location = { lat: coord[i].lat, lng: coord[i].lng }
      addMarker(location, 'Encuentra tu camino ' + i)
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
