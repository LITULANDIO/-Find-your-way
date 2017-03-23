
function initMap () {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: retiro.localitation
  })
  var geocoder = new google.maps.Geocoder()
  var infowindow = new google.maps.InfoWindow()
}
