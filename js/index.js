$(document).ready(function() {

  // SET CONFIG VARIABLES
  Page.columns = 5
  Page.rows = 5

  var page = new Page
  var board = new Board
  // board.createMushroom('[3,4]')
  // board.createMushroom('[2,4]')
  // board.createMushroom('[5,3]')

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
