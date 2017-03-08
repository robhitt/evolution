$(document).ready(function() {

  // initialize the page and board
  var page = new Page
  page.board = new Board(Opts.columns, Opts.rows, Opts.boardDivId)

  // start the game
  new Evolution

  // add listeners for mobile swipes
  new MobileMovements
  MobileMovements.controlledplayerId = 0

  console.log("==========")
  console.log("Made with care by: robhitt@gmail.com or andrew.nease.code@gmail.com")
  console.log("==========")
  console.log("            __")
  console.log("           / _)")
  console.log("    .-^^^-/ /")
  console.log("__/       /")
  console.log("<__.|_|-|_|")
})
