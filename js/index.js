$(document).ready(function() {
  $('#board').fadeOut(1000)
  $('#board').fadeIn(3500)

  // SET CONFIG VARIABLES
  Page.columns = 5
  Page.rows = 5

  var page = new Page
  var board = new Board

  page.board = board

  var game = new Evolution
  var mobile_movements = new MobileMovements


  // test mobile sound
// document.getElementById('board').addEventListener('touchend', handleTouchEnd, false);

// function handleTouchEnd() {
//
//   mariomoveElement.play()
// }

})
