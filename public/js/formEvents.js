$(document).ready(function () {
  var selectRoad = document.getElementById('selectPath').value
  var selectComunity = document.getElementById('selectComunity').value
  var selectHourStart = document.getElementById('selectHourStart').value
  var selectMinuteStart = document.getElementById('selectMinuteStart').value
  var selectHourEnd = document.getElementById('selectHourEnd').value
  var selectMinuteEnd = document.getElementById('selectMinuteEnd').value
  var textAreaDescription = document.getElementById('description').value
  var textAreaTags = document.getElementById('tags').value

  if ((!selectRoad) & (!selectComunity) & (!selectHourStart) & (!selectMinuteStart) & (!selectHourEnd) & (!selectMinuteEnd) & (!textAreaDescription) & (!textAreaTags)) {
    $('selectPath').value(' ')
    $('selectComunity').value(' ')
    $('selectHourStart').value(' ')
    $('selectMinuteStart').value(' ')
    $('selectHourEnd').value(' ')
    $('selectMinuteEnd').value(' ')
    $('description').value(' ')
    $('tags').value(' ')

    console.log(selectRoad)
  }
})

