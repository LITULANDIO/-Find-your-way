function agregar () {
  if ((navigator.appName == 'Microsoft Internet Explorer') && (parseInt(navigator.appVersion) >= 4)) {
    var url = 'https://www.encuentratucamino.herokuapp.com/'
    var titulo = 'Carles Far - Front Developer'
    window.external.AddFavorite(url, titulo)
  } else {
    if (navigator.appName == 'Netscape') {
      alert('Presione Crtl+D para agregar este sitio a Mis Favoritos')
    }
  }
}
