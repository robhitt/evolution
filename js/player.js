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
