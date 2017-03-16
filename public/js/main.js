$(document).ready(function () {
  $('#sel1').on('change', function () {
  	var selectedItem = this.value
  	$('#search').val(selectedItem)
  })
  $('#search').on('click', function () {
  	console.log($('#search').val())

    if ($('#search').val() == 2) {
    	console.log('hey!!!!!')
      window.location.replace('/retiros/yoga')
    }  	else if ($('#search').val() == 3) {
      window.location.href = '/retiros/ayurveda'
    }  	else if ($('#search').val() == 4) {
      window.location.href = '/retiros'
    }
  })
})
