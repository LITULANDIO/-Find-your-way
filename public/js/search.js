
$(document).ready(function () {
  $('#sel1').on('change', function () {
    var selectedItem = this.value
    $('#search').val(selectedItem)
  })
  $('#search').on('click', function () {
    console.log($('#search').val())
    const route1 = 'ayurveda'.toUpperCase()
    const route2 = 'yoga'.toUpperCase()

    if ($('#search').val() == 2) {
      console.log('hey!!!!!')
      window.location.replace('/retiros/Yoga')
    } else if ($('#search').val() == 3) {
      window.location.replace('/retiros/Ayurveda')
    } else if ($('#search').val() == 4) {
      window.location.replace('/retiros')
    }
  })
})
