$(document).ready(function() {

  // SET CONFIG VARIABLES
  Page.columns = 5
  Page.rows = 5

  Player.power_urls = [ 'images/egg/egg4.png',
                        'images/chicken/chicken6.png',
                        'images/dinosaur/dinosaur4.png',
                        'images/winner.gif']

  var page = new Page
  var board = new Board

  page.board = board

  var game = new Evolution
  var mobile_movements = new MobileMovements

console.log("==========")
console.log("Made with care by: robhitt@gmail.com or andrew.nease.code@gmail.com")
console.log("==========")
console.log("            __")
console.log("           / _)")
console.log("    .-^^^-/ /")
console.log("__/       /")
console.log("<__.|_|-|_|")

  //
  //
  // console.log("                            .       .")
  // console.log("                         / `.   .' \\")
  // console.log("                 .---.  <    > <    >  .---.")
  // console.log("                 |    \  \ - ~ ~ - /  /    |")
  // console.log("                  ~-..-~             ~-..-~")
  // console.log("              \~~~\.'                    `./~~~/")
  // console.log("               \__/                        \__/")
  // console.log("                /                  .-    .  \\")
  // console.log("         _._ _.-    .-~ ~-.       /       }   \/~~~/")
  // console.log("     _.-'q  }~     /       }     {        ;    \__/")
  // console.log("    {'__,  /      (       /      {       /      `. ,~~|   .     .")
  // console.log("     `''''='~~-.__(      /_      |      /- _      `..-'   \\   //")
  // console.log("                 / \   =/  ~~--~~{    ./|    ~-.     `-..__\\_//_.-'")
  // console.log("                {   \  +\         \  =\ (        ~ - . _ _ _..---~")
  // console.log("                |  | {   }         \   \_\\")
  // console.log("               '---.o___,'       .o___,'     ")


  // test mobile sound
// document.getElementById('board').addEventListener('touchend', handleTouchEnd, false);

// function handleTouchEnd() {
//
//   mariomoveElement.play()
// }

})
