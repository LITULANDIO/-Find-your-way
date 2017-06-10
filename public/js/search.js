
// Buscador de RETIROS

$(document).ready(function () {
  $('#sel1').on('change', function () {
    var selectedItem = this.value
    $('#sel1').val(selectedItem)
  })
  $('#sel1').on('change', function (e) {
    console.log($('#sel1').val())
    const route1 = 'ayurveda'.toUpperCase()
    const route2 = 'yoga'.toUpperCase()

    if ($('#sel1').val() == 2) {
      console.log('hey!!!!!')
      window.location.replace('/retiros/Yoga')
    } else if ($('#sel1').val() == 3) {
      window.location.replace('/retiros/Ayurveda')
    } else if ($('#sel1').val() == 4) {
      window.location.replace('/retiros/Tantra')
    } else if ($('#sel1').val() == 5) {
      window.location.replace('/retiros')
    }
  })

// Buscador de FORMACIONES
  $('#sel2').on('change', function () {
    var selectedItem = this.value
    $('#sel2').val(selectedItem)
  })
  $('#sel2').on('change', function (e) {
    console.log($('#sel1').val())
    const route1 = 'ayurveda'.toUpperCase()
    const route2 = 'yoga'.toUpperCase()

    if ($('#sel2').val() == 2) {
      console.log('hey!!!!!')
      window.location.replace('/formaciones/Yoga')
    } else if ($('#sel2').val() == 3) {
      window.location.replace('/formaciones/Ayurveda')
    } else if ($('#sel2').val() == 4) {
      window.location.replace('/formaciones/Tantra')
    } else if ($('#sel2').val() == 5) {
      window.location.replace('/formaciones')
    }
  })

  // Buscador de TALLERES

  $('#sel3').on('change', function () {
    var selectedItem = this.value
    $('#sel3').val(selectedItem)
  })
  $('#sel3').on('change', function (e) {
    console.log($('#sel3').val())
    const route1 = 'ayurveda'.toUpperCase()
    const route2 = 'yoga'.toUpperCase()

    if ($('#sel3').val() == 2) {
      console.log('hey!!!!!')
      window.location.replace('/talleres/Yoga')
    } else if ($('#sel3').val() == 3) {
      window.location.replace('/talleres/Ayurveda')
    } else if ($('#sel3').val() == 4) {
      window.location.replace('/talleres/Tantra')
    } else if ($('#sel3').val() == 5) {
      window.location.replace('/talleres')
    }
  })

  // Buscador de CONFERENCIAS

  $('#sel4').on('change', function () {
    var selectedItem = this.value
    $('#sel4').val(selectedItem)
  })
  $('#sel4').on('change', function (e) {
    console.log($('#sel3').val())
    const route1 = 'ayurveda'.toUpperCase()
    const route2 = 'yoga'.toUpperCase()

    if ($('#sel4').val() == 2) {
      console.log('hey!!!!!')
      window.location.replace('/conferencias/Yoga')
    } else if ($('#sel4').val() == 3) {
      window.location.replace('/conferencias/Ayurveda')
    } else if ($('#sel4').val() == 4) {
      window.location.replace('/conferencias/Tantra')
    } else if ($('#sel4').val() == 5) {
      window.location.replace('/conferencias')
    }
  })

  // Buscador de INSTRUCTORES

  $('#sel5').on('change', function () {
    var selectedItem = this.value
    $('#sel5').val(selectedItem)
  })
  $('#sel5').on('change', function (e) {
    console.log($('#sel5').val())
    const route1 = 'ayurveda'.toUpperCase()
    const route2 = 'yoga'.toUpperCase()

    if ($('#sel5').val() == 2) {
      console.log('hey!!!!!')
      window.location.replace('/instructores/Yoga')
    } else if ($('#sel5').val() == 3) {
      window.location.replace('/instructores/Ayurveda')
    } else if ($('#sel5').val() == 4) {
      window.location.replace('/instructores/Tantra')
    } else if ($('#sel5').val() == 5) {
      window.location.replace('/instructores')
    }
  })
})

