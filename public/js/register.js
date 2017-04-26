$(function () {
  $('#register').click(function (e) {
    $('#login-form').delay(100).fadeIn(100)
    $('#register-form').fadeOut(100)
    $('#login').removeClass('active')
    $(this).addClass('active')
    e.preventDefault()
  })

  $('#login').click(function (e) {
    $('#register-form').delay(100).fadeIn(100)
    $('#login-form').fadeOut(100)
    $('#register').removeClass('active')

    $(this).addClass('active')

    e.preventDefault()
  })
})

// if ( input.attr( "title" ) === inputTitle ) {
//       input.removeAttr( "title" )
//     } else {
//       input.attr( "title", inputTitle );
//     }
