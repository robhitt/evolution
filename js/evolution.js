class Evolution {
  constructor() {
    console.log('Evolution class created...')
    Evolution.turnCount = 0

    Evolution.allPlayers = []

    // this function will capture user input and create new players
    // and add them to Evolution.allPlayers
    this.welcome()
    this.keyPress()
  }

  welcome() {
    Prompt.render('Players, enter your names:','addPlayertoGame')
  }

  keyPress() {
    document.addEventListener('keydown', Evolution.handleKeyDown)
  }
}


Evolution.handleKeyDown = function(event) {
  console.log('key pressed')

  if (Evolution.currentPlayer.playerId === 1) {
    switch (event.keyCode) {
      case 37: // Left
        if (Evolution.currentPlayer.validMove('left')) {
          Evolution.currentPlayer.move('left')
        }
        // if (Evolution.allPlayers[1].validMove('left')) {
        //   Evolution.allPlayers[1].move('left')
        // }
        break;
      case 39: // Right
        if (Evolution.currentPlayer.validMove('right')) {
          Evolution.currentPlayer.move('right')
        }
        // if (Evolution.allPlayers[1].validMove('right')) {
        //   Evolution.allPlayers[1].move('right')
        // }
        break;
      case 38: // Up
        if (Evolution.currentPlayer.validMove('up')) {
          Evolution.currentPlayer.move('up')
        }
        // if (Evolution.allPlayers[1].validMove('up')) {
        //   Evolution.allPlayers[1].move('up')
        // }
        break;
      case 40: // Down
        if (Evolution.currentPlayer.validMove('down')) {
          Evolution.currentPlayer.move('down')
        }
        // if (Evolution.allPlayers[1].validMove('down')) {
        //   Evolution.allPlayers[1].move('down')
        // }
        break;
      }
    } else {
        switch (event.keyCode) {

        case 65: // A
          if (Evolution.currentPlayer.validMove('left')) {
            Evolution.currentPlayer.move('left')
          }
          // if (Evolution.allPlayers[0].validMove('left')) {
          //   Evolution.allPlayers[0].move('left')
          // }
          break;
        case 83: // S
          if (Evolution.currentPlayer.validMove('down')) {
            Evolution.currentPlayer.move('down')
          }
          // if (Evolution.allPlayers[0].validMove('down')) {
          //   Evolution.allPlayers[0].move('down')
          // }
          break;
        case 68: // D
          if (Evolution.currentPlayer.validMove('right')) {
            Evolution.currentPlayer.move('right')
          }
          // if (Evolution.allPlayers[0].validMove('right')) {
          //   Evolution.allPlayers[0].move('right')
          // }
          break;
        case 87: // W
          if (Evolution.currentPlayer.validMove('up')) {
            Evolution.currentPlayer.move('up')
          }
          // if (Evolution.allPlayers[0].validMove('up')) {
          //   Evolution.allPlayers[0].move('up')
          // }
          break;
      }
    }

    switch (event.keyCode) {
      case 81: // Q
        // Rob case
        hornElement.load();
        hornElement.play();
        console.log('q')
        break;
      case 90: // Z
        // Rob case
        loseElement.load();
        loseElement.play();
        console.log('z')
        break;
      }

      var hornElement = document.createElement('audio');
      hornElement.setAttribute('src', 'audio/horn.mp3');

      var loseElement = document.createElement('audio');
      loseElement.setAttribute('src', 'audio/lose-horn.mp3');


  };














// Outside of Class
Evolution.newCurrentPlayer = function () {
  Evolution.turnCount += 1

  Evolution.currentPlayer.playerDiv.classList.remove('grow')

    // this option is for a two player game
    if (Evolution.turnCount % 2 === 0) {
      Evolution.currentPlayer = Evolution.allPlayers[0]
    } else {
      Evolution.currentPlayer = Evolution.allPlayers[1]
    }
  Evolution.currentPlayer.playerDiv.classList.add('grow')
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

// this outside of class or instance because of the Prompt class
var addPlayertoGame = function(player_names) {

  player_names.forEach (function(name) {

    var newPlayer = new Player
    newPlayer.name = name
    newPlayer.createPlayerDiv()

    Evolution.allPlayers.push(newPlayer)
  })

  Evolution.currentPlayer = Evolution.allPlayers[0]

  Evolution.allPlayers.forEach (function (player) {
    player.render()
  })

//  $('#board').fadeOut(1000)
  introElement.load();
  introElement.play();
  $('#board').fadeIn(5000)
}

var introElement = document.createElement('audio');
introElement.setAttribute('src', 'audio/pac-man-intro.mp3');
