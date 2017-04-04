 $(document).ready(function (e) {
   e.preventDefault()
   if ($(location).attr('href', '/retiros/Yoga')) {
     $('#title-mine').append('Retiros de Yoga')
   } else if ($(location).attr('href', '/retiros/Ayurveda')) {
     $('#title-mine').append('Retiros de Ayurveda')
   } else if ($(location).attr('href', '/retiros')) {
     $('#title-mine').append('Retiros de Yoga y Ayurveda')
   }
 })

