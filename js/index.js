$(document).ready(function() {

  // SET CONFIG VARIABLES
  Board.columns = 5
  Board.rows = 5

  Board.mushroomURL = 'images/mushrooms/mushroom1.png'

  Player.power_urls = [ 'images/egg/egg4.png',
                        'images/chicken/chicken6.png',
                        'images/dinosaur/dinosaur4.png',
                        'images/winner.gif']

  Player.colors = ['#00FF00', '#800080']
  Player.startingCoordinates = [ [1,1], [5,5] ]

  var page = new Page
  var board = new Board
  page.board = board

  var game = new Evolution

  new MobileMovements

  MobileMovements.controlledplayerId = 0

  Evolution.wintext = function (winner) {

    var winstring = `Congratulations, ${winner}!`

    return winstring
  }


console.log("==========")
console.log("Made with care by: robhitt@gmail.com or andrew.nease.code@gmail.com")
console.log("==========")
console.log("            __")
console.log("           / _)")
console.log("    .-^^^-/ /")
console.log("__/       /")
console.log("<__.|_|-|_|")


  // test mobile sound
// document.getElementById('board').addEventListener('touchend', handleTouchEnd, false);

// function handleTouchEnd() {
//
//   mariomoveElement.play()
// }

})
