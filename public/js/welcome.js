$(document).ready(function () {
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  $('p').each(function () {
    var text = $(this).html()
    var words = text.split(' ')
    var spanSentence = ''
    for (var i = 0; i < words.length; i++) {
      spanSentence += '<span>' + words[i] + '</span> '
    }
    $(this).html(spanSentence)
  })

  $('p span').each(function () {
    $(this)
    .css({
      'transform': 'translate(' + getRandomInt(-100, 100) + 'px, ' + getRandomInt(-100, 100) + 'px)'
    })
  })

  setTimeout(function () {
    $('p:nth-child(1) span').css({
      'transform': 'translate(0, 0)',
      'opacity': 1
    })
  }, 50)

  setTimeout(function () {
    $('p:nth-child(2) span').css({
      'transform': 'translate(0, 0)',
      'opacity': 1
    })
  }, 3050)

  setTimeout(function () {
    $('p:nth-child(3) span').css({
      'transform': 'translate(0, 0)',
      'opacity': 1
    })
  }, 6050)
})
