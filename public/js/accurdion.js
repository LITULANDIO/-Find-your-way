$(function () {
  function toggleChevron (e) {
    $(e.target)
            .prev('.panel-heading')
            .find('i')
            .toggleClass('fa-minus-circle')
  }
  $('#accordion').on('hidden.bs.collapse', toggleChevron)
  $('#accordion').on('shown.bs.collapse', toggleChevron)
})
