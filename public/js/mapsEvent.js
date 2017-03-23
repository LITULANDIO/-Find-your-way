maps geocoding
// const GeocoderRequest = {
//                            address: string,
//                            location: LatLng,
//                            placeId: string,
//                            bounds: LatLngBounds,
//                            componentRestrictions: GeocoderComponentRestrictions,
//                            region: string
//                           }
function initMap () {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: 40.759220, lng: -3.658447}
  })
  var geocoder = new google.maps.Geocoder()
  var infowindow = new google.maps.InfoWindow()

  document.getElementById('submit').addEventListener('click', function () {
    geocodeAddress(geocoder, map, infowindow)
  })
}

function geocodeAddress (geocoder, resultsMap) {
  var address = document.getElementById('address').value
  geocoder.geocode({'address': retiros.localitation, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location)
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      })
    } else {
      alert('El geolocalizador no reconoce la dirección: ' + status)
    }
  })
}

