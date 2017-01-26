$(document).ready(function() {
    $('#wrapper').css('background-color', '#ADD8E6')
    // $('#wrapper').fadeOut(500)
    // $('#wrapper').fadeIn(500)

    // get window size
    var mainWidth = window.innerWidth
    var mainHeight = window.innerHeight

    // set size
    document.getElementById('wrapper').style.width = mainWidth + 'px'
    document.getElementById('wrapper').style.height = mainHeight + 'px'

    // get true pixel board size based the percentage width of actual window
    var boardElement = document.getElementById('board')
    var computedBoardElementStyle = window.getComputedStyle(boardElement, null)

    var boardWidth = parseInt(computedBoardElementStyle.width)
    var boardHeight = parseInt(computedBoardElementStyle.height)

    // number of rows & columns the board will have
    var columns = 5
    var rows = 5

    // set cell board width & height
    var cellBoxWidth = boardWidth / columns
    var cellBoxHeight = boardHeight / rows

    // function setUpBoard (columns, rows) {
    //   for (var i = 0; i < columns; i++) {
    //     for (var i = 0; i < rows; i++) {
    //        createCell()
    //     }
    //   }
    // }



    function createCell(position, uniqueCellId) {
      var boardElement = document.getElementById('board')
      var cellElement = document.createElement('div')
      console.log('test')
      console.log(document.getElementById('wrapper').style.width)

      cellElement.setAttribute('id', position)

      cellElement.classList.add('cell');

      cellElement.style.width = cellBoxWidth + 'px'
      cellElement.style.height = cellBoxHeight + 'px'
      cellElement.style.backgroundColor = 'grey'
      // cellElement.style.top = '10px'
      // cellElement.style.left = '10px'

      console.log('cellboxHeight: ' + cellBoxHeight)
      console.log('board width: ' + boardWidth)
      console.log('id: ' + uniqueCellId)
      console.log('id % rows: ' + uniqueCellId % rows)
      console.log('id % rows * cellboxHeight: ' + (uniqueCellId % rows) * cellBoxWidth)






      cellElement.style.top = (uniqueCellId % rows) * cellBoxHeight + 'px'
      cellElement.style.left = (Math.floor(uniqueCellId / rows) * cellBoxWidth) + 'px'

      boardElement.appendChild(cellElement)

    }

    for (var i = 0; i < 25; i++) {
        createCell(i, i)
    }


})
