
function initMap () {
  var lat = document.getElementById('lat').value
  var long = document.getElementById('long').value
  var parseLat = [parseFloat(lat)]
  var parseLong = [parseFloat(long)]
  var geoc = {lat: parseLat, lng: parseLong}

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: geoc
  })

var infowindow = new google.maps.InfoWindow();
      var marker, i;
      for (i = 0; i < marcadores.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(parseLat[i][1], parseLong[i][2]),
          map: map
        });

  var image = '/img/marker.gif'

  var marker = new google.maps.Marker({
    map: map,
    position: geoc,
    title: 'Encuentra tu camino',
    icon: image
  })
  



