
var title = document.getElementById('box').innerHTML

var boxes = []

for (var i = title.length - 1; i >= 0; i--) {
  boxes.push(title[i])
  console.log(title[i])
}

// $.each(boxes, function (value, index) {
//   console.log(value + '/' + index)
// })
