// Funcion que muestra la ubicacion de los objetos en Google Maps
var map

function viewMap () {
    // coordenadas
  myLatlng = {
    Lat: '41.5911589',
    Lng: '1.5208623999999418'
  }

    // Objeto utilizado para la manipulación de las opciones del mapa.
  var mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(myLatlng.Lat, myLatlng.Lng),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

    // construyo el mapa
  map = new google.maps.Map(document.getElementById('maps'),
        mapOptions)
  var longs = []
  var lat
  var long
  var collection = $('#lat').val()
  // console.log(collection)
  for (var i = collection.length - 1; i >= 0; i--) {
    longs.push(collection[i])
  }
  $.each(longs, function (value, index) {
    console.log(value + '/' + index)
  })
  // for (var i in collection)
  //   console.log(collection[i])
  // collection.each(function () {
  //   lat = $('#lat p').html()
  //   long = $('#long p').html()
  //   longs.push(lat + ' / ' + long)
  // })
  console.log(longs)
  addMarkers()
}

function addMarker (m_position, m_title) {
  marker = new google.maps.Marker({
    position: m_position,
    map: map,
    title: m_title
  })
}

var lat = document.getElementById('lat').innerHTML
var long = document.getElementById('long').innerHTML
var parseLat = parseFloat(lat)
var parseLong = parseFloat(long)
var geoc = { lat: parseLat, lng: parseLong}

var markersArray = [{

  lat: parseLat,
  lng: parseLong
}

]

console.log(markersArray)
    // agrego multiples POIs al mapa
function addMarkers () {
  for (var i = 0; i < markersArray.length; i++) {
    var location = new google.maps.LatLng(markersArray[i].lat, markersArray[i].lng)
    addMarker(location, 'Encuentra tu camino ' + i)
  }
}

viewMap()

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
