import Opts from './config/opts';

export default class Board {
  constructor(columns, rows, boardDivId) {

    // set instance variables to create board
    this.columns = columns
    this.rows = rows

    // get the DOM element in which to construct the board
    this.boardElement = document.getElementById(boardDivId)

    // set instance variables for the size of the board and the cells
    this.setSizeVariables()

    // generate the board's cells
    this.generateCells()

    // get an array of positions for the mushrooms
    this.mushroomsPositions = this.mushrooms()

    // use the mushroom positions to create mushrooms on the board
    this.populateMushroomsOnBoard()
  }

  setSizeVariables() {
    // get the true pixel size of the board, which was set in CSS using view width and view height
    var computedBoardElementStyle = window.getComputedStyle(this.boardElement, null)

    // set instance variables for the the computed style of the board
    this.boardWidth = parseInt(computedBoardElementStyle.width)
    this.boardHeight = parseInt(computedBoardElementStyle.height)

    // calculate the the cells' width & height using the parameters assigned in the constuctor
    this.cellWidth = this.boardWidth / this.columns
    this.cellHeight = this.boardHeight / this.rows
  }

  generateCells() {
    // clear the board div
    this.boardElement.innerHTML = ''

    // iterate through the total number of cells
    for (var i = 0; i < this.columns * this.rows; i++) {

      // create the cells
      // the first parameter will equal the id of the generated div
      // e.g. '[1,5]', '[1,4]', '[1,3]', etc.
      // the second parameter will be a counter for the number of generated cells
      // the x coordinate will be calculated as: Math.floor(i / rows)
      // the y coordinate will be calculated as: rows - (i % rows)
      this.createCell(`[${1 + (Math.floor(i / this.rows))},${this.rows - (i % this.rows)}]`, i)
    }
  }

  createCell(id_coordinates, iterator) {
    // create a new div to style and append as a child to the board
    var cellElement = document.createElement('div')

    // set the id and class for the div
    cellElement.setAttribute('id', id_coordinates)
    cellElement.classList.add('cell')

    // set the div's width and heigth
    cellElement.style.width = this.cellWidth + 'px'
    cellElement.style.height = this.cellHeight + 'px'

    // uncomment below to demonstrate and display the id of the div
    // cellElement.textContent = position.toString()

    // these statements assign classes to the cells that are on the border of the board
    if (iterator % this.rows === 0) {cellElement.classList.add('topRow')}
    if (iterator % this.rows === (this.rows - 1)) {cellElement.classList.add('bottomRow')}
    if (Math.floor(iterator / this.rows) === 0) {cellElement.classList.add('leftRow')}
    if (Math.floor(iterator / this.rows) === (this.columns - 1)) {cellElement.classList.add('rightRow')}

    // position each div by setting top and left for each div
    cellElement.style.top = (iterator % this.rows) * this.cellHeight + 'px'
    cellElement.style.left = (Math.floor(iterator / this.rows) * this.cellWidth) + 'px'

    // append the cell div to the board
    this.boardElement.appendChild(cellElement)
  }

  mushrooms() {
    let potentialPositions =
      [
        [ "[3,5]", "[1,4]", "[2,4]", "[2,2]", "[5,2]", "[1,3]", "[4,5]"],
        [ "[3,5]", "[1,4]", "[2,4]", "[1,2]", "[5,2]", "[1,3]", "[4,5]"],
        [ "[2,5]", "[3,4]", "[2,4]", "[2,2]", "[5,2]", "[1,3]", "[4,5]"],
        [ "[4,5]", "[3,4]", "[2,4]", "[2,2]", "[5,2]", "[1,3]", "[3,5]"],
        [ "[2,5]", "[3,4]", "[5,4]", "[2,2]", "[5,2]", "[1,3]", "[4,5]"]
       ]

    var randomIndex = Math.floor(Math.random() * potentialPositions.length)
    return potentialPositions[randomIndex]
  }

  populateMushroomsOnBoard() {
    var that = this

    // for each position in the array, create a mushroom div
    this.mushroomsPositions.forEach (function (element) {
      that.createMushroom(element)
    })
  }

  createMushroom(coordinates) {
    // create a div for the mushroom
    var mushroomElement = document.createElement('div')
    mushroomElement.classList.add('mushroom')

    // create an image element for the mushroom image
    var imageElement = document.createElement('img')
    imageElement.classList.add('mushroom-image')
    imageElement.setAttribute('src', Opts.mushroomURL)

    // append the image to the mushroom div
    mushroomElement.appendChild(imageElement)

    // append the mushroom div to the coordinates from the mushroomsPositions array
    document.getElementById(coordinates).appendChild(mushroomElement)
  }

  // when the page is resized, this function will be called to resize the cells
  repositionCells() {
    // store the cells in an array
    var cellBoxElements = document.getElementsByClassName('cell');

    // loop through each cell
    var i = 0;
    while (i < cellBoxElements.length) {
      // resize the cell
      cellBoxElements[i].style.width = this.cellWidth + 'px';
      cellBoxElements[i].style.height = this.cellHeight + 'px';

      // position the cell in a grid
      // the row is equal to the remainder of i / rows
      cellBoxElements[i].style.top = (i % this.rows) * this.cellHeight + 'px';
      //  the column is equal to the quotient, rounded down
      cellBoxElements[i].style.left = ( Math.floor(i / this.rows) * this.cellWidth) + 'px';
      i++;
    };
  }
}
