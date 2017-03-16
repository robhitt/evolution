class Board {
  constructor() {

    this.boardElement = document.getElementById('board')
    this.createMushroom = this.createMushroom

    this.setSizeVariables()
    this.generateCells()

    this.mushroomsArr = this.mushrooms()
    this.populateMushroomsOnBoard()
  }

  setSizeVariables() {

    // get the true pixel size of the board, which was set using percentage of view in the #board CSS
    var computedBoardElementStyle = window.getComputedStyle(this.boardElement, null)

    // set the computed style (true pixel count) of the board
    this.boardWidth = parseInt(computedBoardElementStyle.width)
    this.boardHeight = parseInt(computedBoardElementStyle.height)

    // calculate the the cells' width & height
    this.cellBoxWidth = this.boardWidth / Board.columns
    this.cellBoxHeight = this.boardHeight / Board.rows
  }

  createCell(position, iterator) {
    // create new div to style and append as child to board
    var cellElement = document.createElement('div')

    cellElement.setAttribute('id', position)
    cellElement.classList.add('cell')
    cellElement.style.width = this.cellBoxWidth + 'px'
    cellElement.style.height = this.cellBoxHeight + 'px'
    // this is to demonstrate and display the id of the div
    // cellElement.textContent = position.toString()

    // conditional booleans to add edge classes
    if (iterator % Board.rows === 0) {cellElement.classList.add('topRow')}
    if (iterator % Board.rows === (Board.rows - 1)) {cellElement.classList.add('bottomRow')}
    if (Math.floor(iterator / Board.rows) === 0) {cellElement.classList.add('leftRow')}
    if (Math.floor(iterator / Board.rows) === (Board.columns - 1)) {cellElement.classList.add('rightRow')}

    // set the top and left coordinates of each div
    cellElement.style.top = (iterator % Board.rows) * this.cellBoxHeight + 'px'
    cellElement.style.left = (Math.floor(iterator / Board.rows) * this.cellBoxWidth) + 'px'

    this.boardElement.appendChild(cellElement)
  }

  generateCells() {

    this.boardElement.innerHTML = ''
    // i = 0 to total number of cells
    for (var i = 0; i < Board.columns * Board.rows; i++) {

      // createCell parameters:
      // i: the numbered position on the grid
      // position: y coordinate = rows - (i % rows)
      //           x coordinate = Math.floor(i / rows)
      this.createCell(`[${1 + (Math.floor(i / Board.rows))},${Board.rows - (i % Board.rows)}]`, i)
    }
  }

  repositionCells() {
    // store the cells in an array
    var cellBoxElements = document.getElementsByClassName('cell');

    // loop through each cell
    var i = 0;
    while (i < cellBoxElements.length) {
      // resize the cell
      cellBoxElements[i].style.width = this.cellBoxWidth + 'px';
      cellBoxElements[i].style.height = this.cellBoxHeight + 'px';

      // position the cell in a grid
      // the row is equal to the remainder of i / rows
      cellBoxElements[i].style.top = (i % Board.rows) * this.cellBoxHeight + 'px';
      //  // the column is equal to the quotient, rounded down
      cellBoxElements[i].style.left = ( Math.floor(i / Board.rows) * this.cellBoxWidth) + 'px';
      i++;
    };
  }

  createMushroom(coordinates) {
    var mushroomElement = document.createElement('div')
    mushroomElement.classList.add('mushroom')

    var imageElement = document.createElement('img')
    imageElement.classList.add('mushroom-image')
    imageElement.setAttribute('src', Board.mushroomURL)

    mushroomElement.appendChild(imageElement)

    document.getElementById(coordinates).appendChild(mushroomElement)
  }

  populateMushroomsOnBoard() {

    var that = this

    this.mushroomsArr.forEach (function (element, index, array) {
      that.createMushroom(element)
    })
  }

  mushrooms() {
    let arr =
      [
        [ "[3,5]", "[1,4]", "[2,4]", "[2,2]", "[5,2]", "[1,3]", "[4,5]"],
        [ "[3,5]", "[1,4]", "[2,4]", "[1,2]", "[5,2]", "[1,3]", "[4,5]"],
        [ "[2,5]", "[3,4]", "[2,4]", "[2,2]", "[5,2]", "[1,3]", "[4,5]"],
        [ "[4,5]", "[3,4]", "[2,4]", "[2,2]", "[5,2]", "[1,3]", "[3,5]"],
        [ "[2,5]", "[3,4]", "[5,4]", "[2,2]", "[5,2]", "[1,3]", "[4,5]"]
       ]

    var randomArrayIndex = Math.floor(Math.random() * arr.length)
    return arr[randomArrayIndex]
  }
}
