$(document).ready(function() {
  $('#board').fadeOut(1000)
  $('#board').fadeIn(3500)

  // SET CONFIG VARIABLES
  Page.columns = 5
  Page.rows = 5

  var page = new Page
  var game = new Evolution
  var board = new Board
  page.board = board
  var mobile_movements = new MobileMovements

  // test area
  r = new Player
  r.name = "Rob"

  a = new Player
  a.name = "Andy"

  r.keyPress()

  Evolution.allPlayers = [r]
  Evolution.currentPlayer = r
  Evolution.currentPlayer.render()
  Evolution.currentPlayer = a
  a.render()


// test mobile sound
// document.getElementById('board').addEventListener('touchend', handleTouchEnd, false);

// function handleTouchEnd() {
//
//   mariomoveElement.play()
// }

})
