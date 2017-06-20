
function initMap () {
  var lat = document.getElementById('lat').value
  var long = document.getElementById('long').value
  var parseLat = parseFloat(lat)
  var parseLong = parseFloat(long)
  var geoc = {lat: parseLat, lng: parseLong}

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: geoc
  })
  var image = '/img/marker.gif'

  var marker = new google.maps.Marker({
    map: map,
    position: geoc,
    title: 'Encuentra tu camino',
    icon: image
  })

  var geocoder = new google.maps.Geocoder()
  var infowindow = new google.maps.InfoWindow()
}
