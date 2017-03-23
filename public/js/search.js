
// $('#sel1').on('change', function () {
//   var selectedItem = this.value.toLowerCase()
//   if (selectedItem === 'Yoga & Ayurveda') {
//     window.location = '/retiros'
//   } else {
//     window.location = '/retiros/' + selectedItem
//   }
// })

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
      window.location.replace('/retiros')
    }
  })
})
