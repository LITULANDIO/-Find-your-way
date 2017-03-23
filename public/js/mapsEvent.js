
function initMap () {
  var lat = document.getElementById('lat').value
  var long = document.getElementById('long').value
  var parseLat = parseFloat(lat)
  var parseLong = parseFloat(long)

  var map = new google.maps.Map(document.getElementById('map'), {

    zoom: 12,
    center: {lat: parseLat, lng: parseLong}
  })

  var marker = new google.maps.Marker({
    map: resultsMap,
    position: results[0].geometry.location
  })

  var geocoder = new google.maps.Geocoder()
  var infowindow = new google.maps.InfoWindow()
}
