class Evolution {
  constructor() {
    console.log('Evolution class created...')
    Evolution.turnCount = 0

    Evolution.allPlayers = []

    // this function will capture user input and create new players
    // and add them to Evolution.allPlayers
    this.welcome()






  }

  welcome() {

    Prompt.render('Players, enter your names:','addPlayertoGame')

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

var addPlayertoGame = function(player_names) {


  player_names.forEach (function(name) {

    var newPlayer = new Player
    newPlayer.name = name


    Evolution.allPlayers.push(newPlayer)


  })

  Evolution.currentPlayer = Evolution.allPlayers[0]

  Evolution.currentPlayer.keyPress()

  Evolution.allPlayers.forEach (function (player) {
    player.render()
  })

//  $('#board').fadeOut(1000)
  $('#board').fadeIn(3500)



}
