class Evolution {
  constructor() {
    console.log('Evolution class created.')
    Evolution.turnCount = 0

    Evolution.allPlayers = []

    // this function will capture user input and create new players
    // and add them to Evolution.allPlayers
    // parameters: ('prompt text', callback function)
    // when 'ok' is clicked,
    // the callback function 'addPlayerstoGame' will execute with an array of names as parameters
    // addPlayerstoGame(names) will set up the game and load the intro music and animation when it is called
    Prompt.render(Opts.initialPrompt,'addPlayerstoGame')

    // listen for keypresses
    document.addEventListener('keydown', Evolution.handleKeyDown)
  }
}

// these captured key presses handle the turns in the game
Evolution.handleKeyDown = function(event) {
  console.log('key pressed')

  // listen for player 1 movements
  if (Evolution.currentPlayer.playerId === 1) {
    switch (event.keyCode) {
      case 37: // Left
        // if the move is valid and the div is unoccupied...
        if (Evolution.currentPlayer.validMove('left')) {
          // move the player div
          Evolution.currentPlayer.move('left')
        }
        // uncomment these lines to listen for keypresses without taking turns...
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
        var hornElement = document.createElement('audio');
        hornElement.setAttribute('src', 'audio/horn.mp3');
        hornElement.load();
        hornElement.play();
        console.log('q')
        break;
      case 90: // Z
        var loseElement = document.createElement('audio');
        loseElement.setAttribute('src', 'audio/lose-horn.mp3');
        loseElement.load();
        loseElement.play();
        console.log('z')
        break;
      }
  };

// Outside of Class
Evolution.newCurrentPlayer = function () {
  // add a turnCount
  Evolution.turnCount += 1

  // remove grow animation from previous player
  Evolution.currentPlayer.playerDiv.classList.remove('grow')

  // cycle through allPlayers with turnCount to select a new current player
  Evolution.currentPlayer = Evolution.allPlayers[ Evolution.turnCount % Evolution.allPlayers.length ]

  // add grow animation to current player
  Evolution.currentPlayer.playerDiv.classList.add('grow')
}

// this is outside of the class because the Prompt class is calling window['addPlayerstoGame']
var addPlayerstoGame = function(player_names) {
  // for each player name...
  player_names.forEach (function(name) {
    // create a new player
    var newPlayer = new Player

    // set the player's name
    newPlayer.name = name

    // create a div for the player
    newPlayer.createPlayerDiv()

    // add the player to the allPlayers array
    Evolution.allPlayers.push(newPlayer)
  })

  // set the current player to the first player in the allPlayers array
  Evolution.currentPlayer = Evolution.allPlayers[0]

  // render each player
  Evolution.allPlayers.forEach (function (player) {
    player.render()
  })

  // after all players have been added,
  // play the intro
  Evolution.intro()

}

Evolution.intro = function() {
  // load and play the audio file
  var introElement = document.createElement('audio');
  introElement.setAttribute('src', 'audio/pac-man-intro.mp3');

  introElement.load();
  introElement.play();

  // use jQuery to fade in the board
  $(`#${Opts.boardDivId}`).fadeIn(5000)
}
