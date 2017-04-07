$(document).ready(function () {
  if (window.location.pathname == '/retiros/Yoga') {
    $('#title-mine').text('Retiros de Yoga')
  } else if (window.location.pathname == '/retiros/Ayurveda') {
    $('#title-mine').text('Retiros de Ayurveda')
  } else if (window.location.pathname == '/retiros') {
    $('#title-mine').text('Retiros de Yoga y Ayurveda')
  }
})
