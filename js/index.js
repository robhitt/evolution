$(document).ready(function() {
    $('#wrapper').css('background-color', '#ADD8E6')
    // $('#wrapper').fadeOut(500)
    // $('#wrapper').fadeIn(500)


    // configuration settings

    // number of rows & columns the board will have
    var columns = 5
    var rows = 5


    // variable declarations

    // store the total number of cells for the SetUpBoard for loop
    var totalCells = columns * rows

    // get window size (doing it this way will help with cell phone browsers)
    var mainWidth = window.innerWidth
    var mainHeight = window.innerHeight

    // set wrapper size to the window size
    document.getElementById('wrapper').style.width = mainWidth + 'px'
    document.getElementById('wrapper').style.height = mainHeight + 'px'

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

      cellElement.style.width = cellBoxWidth + 'px'
      cellElement.style.height = cellBoxHeight + 'px'
//      cellElement.style.backgroundColor = 'grey'

      // this is to demonstrate and display the id of the div
      cellElement.textContent = position.toString()

      var toprow = (iterator % rows === 0)
      var bottomrow = (iterator % rows === (rows - 1))
      var leftrow = (Math.floor(iterator / rows) === 0)
      var rightrow = (Math.floor(iterator / rows) === (columns - 1))

      if (toprow) {cellElement.classList.add('topRow')}
      if (bottomrow) {cellElement.classList.add('bottomRow')}
      if (leftrow) {cellElement.classList.add('leftRow')}
      if (rightrow) {cellElement.classList.add('rightRow')}


      // this is to demonstrate that the above booleans are reliable
      // cellElement.textContent = rightrow

      // set the top and left coordinates of each div
      cellElement.style.top = (iterator % rows) * cellBoxHeight + 'px'
      cellElement.style.left = (Math.floor(iterator / rows) * cellBoxWidth) + 'px'

      boardElement.appendChild(cellElement)
    }



    function SetUpBoard() {
      for (var i = 0; i < totalCells; i++) {

        // createCell accepts (id, iterator)
        // id will be the position on the grid
        // y coordinate = rows - (i % rows)
        // x coordinate = Math.floor(i / rows)
        createCell(`[${1 + (Math.floor(i / rows))}, ${rows - (i % rows)}]`, i)

      }
    }

    SetUpBoard()


})
