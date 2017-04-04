
function initMap () {
  // var lat = document.getElementById('lat').value
  // var long = document.getElementById('long').value
  // var parseLat = [parseFloat(lat)]
  // var parseLong = [parseFloat(long)]
  // var geoc = {lat: parseLat, lng: parseLong}

  var map = new google.maps.Map(document.getElementById('maps'), {
    zoom: 8,
    center: {lat: 41.5911589, lng: 1.5208623999999418}
  })
  var geocoder = new google.maps.Geocoder()
  var infowindow = new google.maps.InfoWindow()

  var image = '/img/marker.gif'

  var marker = new google.maps.Marker({
    map: map,
    position: geoc,
    title: 'Encuentra tu camino',
    icon: image
  })
}

