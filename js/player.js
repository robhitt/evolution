class Player {

  constructor() {
    this.playerId = Evolution.allPlayers.length

    this.power = 0

    this.color = Player.colors[this.playerId]
    this.coordinates = Player.startingCoordinates[this.playerId]

    this.createPlayerDiv()
  }

  getName() {
    return prompt("Please enter your name:", "name here");
  }

  stringCoordinates() {
      return `[${this.coordinates.toString()}]`
  }

  // parameter will be something in this array ['left', 'right', 'up', 'down']
  validMove(potentialDirection) {
    marioWallMoveElement.load();

    switch (potentialDirection) {
      case 'left':
        if (document.getElementById(this.stringCoordinates()).classList.contains('leftRow')) {
          marioWallMoveElement.play();
          // Evolution.flash(potentialDirection)
          return false
        }
        break;

      case 'right':
        if (document.getElementById(this.stringCoordinates()).classList.contains('rightRow')) {
          marioWallMoveElement.play();
          // Evolution.flash(potentialDirection)
          return false
        }
        break;

      case 'up':
        if (document.getElementById(this.stringCoordinates()).classList.contains('topRow')) {
          marioWallMoveElement.play();
          // Evolution.flash(potentialDirection)
          return false
        }
        break;

      case 'down':
        if (document.getElementById(this.stringCoordinates()).classList.contains('bottomRow')) {
          marioWallMoveElement.play();
          // Evolution.flash(potentialDirection)
          return false
        }
        break;

    }

    return true
  }


  // paramater will be something in this array ['left', 'right', 'up', 'down']
  move(validDirection) {

    mariomoveElement.load();

    switch (validDirection) {
      case 'left':
        this.coordinates = [this.coordinates[0] - 1, this.coordinates[1]]
        break;
      case 'right':
        this.coordinates = [this.coordinates[0] + 1, this.coordinates[1]]
        break;
      case 'up':
        this.coordinates = [this.coordinates[0], this.coordinates[1] + 1]
        break;
      case 'down':
        this.coordinates = [this.coordinates[0], this.coordinates[1] -1]
        break;
    }

    var playerPositionDiv = document.getElementById(this.stringCoordinates())

    // if the player's location contains a mushroom...
    if (playerPositionDiv.getElementsByClassName('mushroom').length === 1) {

      marioCoinElement.load();
      marioCoinElement.play();

      if (this.power < 3) { this.power += 1 }

      this.playerDiv.childNodes[0].setAttribute('src', Player.power_urls[this.power]) // change player's image
      playerPositionDiv.getElementsByClassName('mushroom')[0].remove() // remove mushroom element
    }

    mariomoveElement.play();
    this.render()
    this.won() // check to see if current player has won
    Evolution.newCurrentPlayer()
  }


  keyPress() {
    document.addEventListener('keydown', function(event) {

      console.log('key pressed')

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
        case 81: // Q
          // Rob case
          console.log('q')
          break;
        case 90: // Z
          // Rob case
          console.log('z')
          break;
        case 191: // ?
          // Rob case
          console.log('?')
          break;
      }

    });


  }

  render() {
    document.getElementById(this.stringCoordinates()).appendChild(this.playerDiv)
  }

  createPlayerDiv() {
    var playerDiv = document.createElement('div')
    playerDiv.setAttribute('id', this.playerId)
    playerDiv.classList.add('player')
    playerDiv.classList.add('grow')
    playerDiv.style.backgroundColor = this.color

    var imageElement = document.createElement('img')
    imageElement.classList.add('player-image')
    imageElement.setAttribute('src', Player.power_urls[0])

    playerDiv.appendChild(imageElement)

    this.playerDiv = playerDiv
  }

  won() {
    if (Evolution.currentPlayer.power == 3) {
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'audio/champions.mp3');
      audioElement.load();
      audioElement.play();
      // alert('Congratulations you are immortal, you\'ve won')
      return true
    }
  }
}

var mariomoveElement = document.createElement('audio');
mariomoveElement.setAttribute('src', 'audio/mario-bounce.mp3');

var marioWallMoveElement = document.createElement('audio');
marioWallMoveElement.setAttribute('src', 'audio/wall-bump.mp3');

var marioCoinElement = document.createElement('audio');
marioCoinElement.setAttribute('src', 'audio/power-up-mushroom.mp3');
