$(document).ready(function() {
  $('#board').fadeOut(1000)
  $('#board').fadeIn(3500)


  // SET CONFIG VARIABLES

  // number of rows & columns the board will have
  var columns = 5
  var rows = 5


  //
  function renderPage(columns, rows) {

    // get window size (doing it this way will help with cell phone browsers)
    var mainWidth = window.innerWidth
    var mainHeight = window.innerHeight

    // set wrapper size to the window size
    document.getElementById('wrapper').style.width = mainWidth + 'px'
    document.getElementById('wrapper').style.height = mainHeight + 'px'

    renderBoard(columns, rows)

  };





function renderBoard(columns, rows) {


  // variable declarations

  // store the total number of cells for the SetUpBoard for loop
  var totalCells = columns * rows

  // get the true pixel size of the board, which was set using percentage of view in the #board CSS
  var boardElement = document.getElementById('board')
  var computedBoardElementStyle = window.getComputedStyle(boardElement, null)

  // store the computed style (true pixel count) of the board
  var boardWidth = parseInt(computedBoardElementStyle.width)
  var boardHeight = parseInt(computedBoardElementStyle.height)

  // set the cells' width & height
  var cellBoxWidth = boardWidth / columns
  var cellBoxHeight = boardHeight / rows


  // define functions

  function createCell(position, iterator) {
    var boardElement = document.getElementById('board')
    var cellElement = document.createElement('div')

    cellElement.setAttribute('id', position)

    cellElement.classList.add('cell');
    cellElement.setAttribute('data-number', iterator)

    cellElement.style.width = cellBoxWidth + 'px'
    cellElement.style.height = cellBoxHeight + 'px'
//      cellElement.style.backgroundColor = 'grey'

    // this is to demonstrate and display the id of the div
    cellElement.textContent = position.toString()

    // conditional area to add edge classes
    var toprow = (iterator % rows === 0)
    var bottomrow = (iterator % rows === (rows - 1))
    var leftrow = (Math.floor(iterator / rows) === 0)
    var rightrow = (Math.floor(iterator / rows) === (columns - 1))

    if (toprow) {cellElement.classList.add('topRow')}
    if (bottomrow) {cellElement.classList.add('bottomRow')}
    if (leftrow) {cellElement.classList.add('leftRow')}
    if (rightrow) {cellElement.classList.add('rightRow')}


    // set the top and left coordinates of each div
    cellElement.style.top = (iterator % rows) * cellBoxHeight + 'px'
    cellElement.style.left = (Math.floor(iterator / rows) * cellBoxWidth) + 'px'


    // create a new image element
    var imageElement = document.createElement('img')
    imageElement.classList.add('cellImage')

    var imageName = 'clear.png'

    imageElement.setAttribute('src', `images/${imageName}`);

    cellElement.appendChild(imageElement)


    boardElement.appendChild(cellElement)
  }



  function SetUpBoard() {
    for (var i = 0; i < totalCells; i++) {

      // createCell accepts (id, iterator)
      // id will be the position on the grid
      // y coordinate = rows - (i % rows)
      // x coordinate = Math.floor(i / rows)
      createCell(`[${1 + (Math.floor(i / rows))},${rows - (i % rows)}]`, i)
    }
  }

  SetUpBoard()



  // helper functions to put somewhere else

  // var t = function test() {
  //   console.log('test')
  // }







//    debugger



}


function ListenForResize(columns, rows) {

  // listen for resize and orientation changes and make adjustments
  // TO ADD: change positions and sizes of all boxes
  window.addEventListener('resize', function () {
    mainwide = window.innerWidth;
    mainhigh = window.innerHeight;

    // set wrapper size
    document.getElementById('wrapper').style.width = window.innerWidth + 'px',
    document.getElementById('wrapper').style.height = window.innerHeight + 'px';

    // get the true pixel size of the board, which was set using percentage of view in the #board CSS
    var boardElement = document.getElementById('board')
    var computedBoardElementStyle = window.getComputedStyle(boardElement, null)

    // store the computed style (true pixel count) of the board
    var boardWidth = parseInt(computedBoardElementStyle.width)
    var boardHeight = parseInt(computedBoardElementStyle.height)

    // set the cells' width & height
    var cellBoxWidth = boardWidth / columns
    var cellBoxHeight = boardHeight / rows




    reposition_all_boxes(boardWidth, boardHeight, columns, rows);

  }, false); // bubbling phase


  // reposition all boxes on the page
  function reposition_all_boxes(boardWidth, boardHeight, column, rows) {

    // set the cells' width & height
    var cellBoxWidth = boardWidth / columns
    var cellBoxHeight = boardHeight / rows

    // get the boxes
    cellBoxElements = document.getElementsByClassName('cell');

    // loop through each box
    var i = 0;
    while (i < cellBoxElements.length) {

      // get the new count from the id
      var count = cellBoxElements[i].getAttribute('data-number');

      // resize the box
      cellBoxElements[i].style.width = cellBoxWidth + 'px';
      cellBoxElements[i].style.height = cellBoxHeight + 'px';

      // position the box in a grid
      // the row is equal to the remainder of count / rows
      cellBoxElements[i].style.top = (count % rows) * cellBoxHeight + 'px';
      //  // the column is equal to the quotient, rounded down
      cellBoxElements[i].style.left = ( Math.floor(count / rows) * cellBoxWidth) + 'px';

      i++;
    };
  };






}



renderPage(columns, rows)
//renderBoard(columns, rows)
ListenForResize(columns, rows)

r = new Player()
r.name = "Rob"

a = new Player()
a.name = "Andy"


r.keyPress()

Evolution.allPlayers = [r]
Evolution.currentPlayer = r
Evolution.currentPlayer.render()
Evolution.currentPlayer = a
a.render()


})
