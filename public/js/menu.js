  $(document).ready(function () {
    $('.menu_li').on({
      mouseenter: function () {
        $(this).addClass('hover_menu')
        $(this).find('ul').fadeIn(300)
        $('.menu_li ul').on({
          mouseenter: function () {
            $(this).parent('.menu_li').addClass('hover_menu')
          },
          mouseleave: function () {
            $(this).parent().find('.menu_lis').removeClass('hover_menu')
          }
        })
      },
      mouseleave: function () {
        $(this).find('ul').fadeOut(300)
        $(this).removeClass('hover_menu')
      }
    })
  })
