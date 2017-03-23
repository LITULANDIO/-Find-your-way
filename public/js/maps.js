
function initMap () {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {}
  })
  var geocoder = new google.maps.Geocoder()
  var infowindow = new google.maps.InfoWindow()

  document.getElementById('submit').addEventListener('click', function () {
    geocodeAddress(geocoder, map, infowindow)
  })
}

function geocodeAddress (geocoder, resultsMap) {
  var address = document.getElementById('address').value
  geocoder.geocode({'address': address}, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location)

      var long = results[0].geometry.viewport.b.f
      var lat = results[0].geometry.viewport.f.f

      $('#long').val(long)
      $('#lat').val(lat)

      console.log(lat + ' / ' + long)

      var image = '/img/marker.gif'

      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
        draggable: true,
        animation: google.maps.Animation.DROP,
        icon: image

      })
      console.log(results[0])
    } else {
      alert('El geolocalizador no reconoce la dirección: ' + status)
    }
  })
}

  //  $('form.edit-retiro').on('submit', function (e) {
  //   e.preventDefault()

  //     var long = results[0].geometry.viewport.b.f
  //     var lat = results[0].geometry.viewport.f.f

  //     const url = '/retiros/add'
  //     const method = 'POST'
  //     const data = 'lat:lat&lon:long',

  //     $.ajax({ url, data,  method })
  //       .then(() => window.location = '/acount')
  //       .catch(() => console.log('Error!!'))
  //   }
  // })
