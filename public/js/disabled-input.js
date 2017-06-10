$(document).ready(function () {
  if ($('#price')) {
    $('#price').focus(function () {
      $("input[name='price']").attr('disabled', false)
    })
  }
  if ($('#free')) {
    $('#free').focus(function () {
      $("input[name='price']").attr('disabled', true)
    })
  }
})
