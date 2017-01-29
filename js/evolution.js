class Evolution {
  constructor() {
    console.log('Evolution class created...')
    Evolution.turnCount = 0

    // this function will capture user input and create new players
    // and add them to Evolution.allPlayers
    this.welcome()
    
    Evolution.currentPlayer.keyPress()

    Evolution.allPlayers.forEach (function (player) {
      player.render()
    })
  }

  welcome() {

    var r = new Player
    r.name = "Rob"

    var a = new Player
    a.name = "Andy"


    Evolution.allPlayers = [r, a]
    Evolution.currentPlayer = r
  }
}

// Outside of Class
Evolution.newCurrentPlayer = function () {
  Evolution.turnCount += 1

    // this option is for a two player game
    if (Evolution.turnCount % 2 === 0) {
      Evolution.currentPlayer = Evolution.allPlayers[0]
    } else {
      Evolution.currentPlayer = Evolution.allPlayers[1]
    }

    // this option is for more than 2 players
    //  Evolution.currentPlayer = Evolution.allPlayers[ Evolution.turnCount % Evolution.allPlayers.length ]
}

Evolution.flash = function (potentialDirection) {
  $('#messages').text(`Moving ${potentialDirection} is not valid.`)
  $('#messages-container').fadeTo(2000, .8, function() {
    $(this).fadeTo(2000,0, function() {
      $('#messages').text('')
    })
  })
}
