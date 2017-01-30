class Player {

  constructor() {
    this.playerId = Evolution.allPlayers.length
//    this.name = this.getName()
    this.power = 0

    if (this.playerId === 0) {
      this.coordinates = [1,1]
      this.color = '#00FF00'
    } else {
      this.coordinates = [5,5]
      this.color = '#800080'
    }

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
        if (document.getElementById(Evolution.currentPlayer.stringCoordinates()).classList.contains('leftRow')) {
          marioWallMoveElement.play();
          // Evolution.flash(potentialDirection)
          return false
        }
        break;

      case 'right':
        if (document.getElementById(Evolution.currentPlayer.stringCoordinates()).classList.contains('rightRow')) {
          marioWallMoveElement.play();
          // Evolution.flash(potentialDirection)
          return false
        }
        break;

      case 'up':
        if (document.getElementById(Evolution.currentPlayer.stringCoordinates()).classList.contains('topRow')) {
          marioWallMoveElement.play();
          // Evolution.flash(potentialDirection)
          return false
        }
        break;

      case 'down':
        if (document.getElementById(Evolution.currentPlayer.stringCoordinates()).classList.contains('bottomRow')) {
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

      this.power += 1

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

    if(event.keyCode == 37) { // Left
      if (Evolution.currentPlayer.validMove('left')) {
        Evolution.currentPlayer.move('left')
      }
    }
    else if(event.keyCode == 39) { // Right
      if (Evolution.currentPlayer.validMove('right')) {
        Evolution.currentPlayer.move('right')
      }
    }
    else if(event.keyCode == 38) { // Up
      if (Evolution.currentPlayer.validMove('up')) {
        Evolution.currentPlayer.move('up')
      }
    }
    else if(event.keyCode == 40) { // Down
      if (Evolution.currentPlayer.validMove('down')) {
        Evolution.currentPlayer.move('down')
      }

    }
    else if(event.keyCode == 65) { // A
      if (Evolution.currentPlayer.validMove('left')) {
        Evolution.currentPlayer.move('left')
      }
    }
    else if(event.keyCode == 83) { // S
      if (Evolution.currentPlayer.validMove('down')) {
        Evolution.currentPlayer.move('down')
      }
    }
    else if(event.keyCode == 68) { // D
      if (Evolution.currentPlayer.validMove('right')) {
        Evolution.currentPlayer.move('right')
      }
    }
    else if(event.keyCode == 87) { // W
      if (Evolution.currentPlayer.validMove('up')) {
        Evolution.currentPlayer.move('up')
      }
    }
    // q = 81
    // z = 90
    // ? = 191

  });


  }

  render() {
    document.getElementById(this.stringCoordinates()).appendChild(this.playerDiv)
  }

  createPlayerDiv() {
    var playerDiv = document.createElement('div')
    playerDiv.setAttribute('id', this.playerId)
    playerDiv.classList.add('player')

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

      // var winnerElement = document.getElementById('win-box')
      // winnerElement.style.display = "block"
      // alert('Congratulations you are immortal, you\'ve won')

      // var winHeight = window.innerHeight
      // var winWidth = window.innerWidth
      //
      // $('#win-box img').


      $('#win-box-container').fadeTo(1000, 1, function() {
        $('#win-box').fadeTo(1000, 1, function() {
        })
      })


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
