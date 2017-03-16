class Player {

  constructor() {
    // the playerId will equal the current number of players
    // in the allPlayers array, before the current player is added, e.g. 0, 1, 2, etc.
    this.playerId = Evolution.allPlayers.length
    this.power = 0

    // set the color and coordinates based on the configurations set in index.js
    this.color = Opts.playerColors[this.playerId]
    this.coordinates = Opts.playerStartingCoordinates[this.playerId]
  }

  // helper method
  stringCoordinates() {
      return `[${this.coordinates.toString()}]`
  }

  // called from Evolution keypresses
  // parameter will be one of ['left', 'right', 'up', 'down']
  validMove(potentialDirection) {
    marioWallMoveElement.load();

    // check to see if moves are valid, based on direction and class names of border cells
    switch (potentialDirection) {
      case 'left':
        if (document.getElementById(this.stringCoordinates()).classList.contains('leftRow')) {
          marioWallMoveElement.play();
          return false
        }
        break;

      case 'right':
        if (document.getElementById(this.stringCoordinates()).classList.contains('rightRow')) {
          marioWallMoveElement.play();
          return false
        }
        break;

      case 'up':
        if (document.getElementById(this.stringCoordinates()).classList.contains('topRow')) {
          marioWallMoveElement.play();
          return false
        }
        break;

      case 'down':
        if (document.getElementById(this.stringCoordinates()).classList.contains('bottomRow')) {
          marioWallMoveElement.play();
          return false
        }
        break;
    }

    // if the move is valid (in terms of the border positions),
    // find the future coordinates to check if it is occupied
    var futureCooridnates

    switch (potentialDirection) {
      case 'left':
        futureCooridnates = [this.coordinates[0] - 1, this.coordinates[1]]
        break;
      case 'right':
        futureCooridnates = [this.coordinates[0] + 1, this.coordinates[1]]
        break;
      case 'up':
        futureCooridnates = [this.coordinates[0], this.coordinates[1] + 1]
        break;
      case 'down':
        futureCooridnates = [this.coordinates[0], this.coordinates[1] -1]
        break;
    }

    var futureStringCoordinates = `[${futureCooridnates.toString()}]`

    // check the future coordinates div for any divs matching a playerId
    // return false if the div is occupied
    if (document.getElementById(futureStringCoordinates).childNodes.length > 0 ) {
      var futureBoxId = document.getElementById(futureStringCoordinates).childNodes[0].getAttribute('id')
      if (futureBoxId === '0' || futureBoxId === '1') {
        marioWallMoveElement.play();
        return false;
      }
    }

    // if the move is valid and the cell is not occupied by another player, return true
    return true
  }

  // when the move is valid...
  move(validDirection) {
    mariomoveElement.load();

    // change the player's coordinates
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

    // get the player's new position on the board.
    var playerPositionDiv = document.getElementById(this.stringCoordinates())

    // if the player's location contains a mushroom...
    if (playerPositionDiv.getElementsByClassName('mushroom').length === 1) {
      marioCoinElement.load();
      marioCoinElement.play();

      // add a power unit to the player
      if (this.power < 3) { this.power += 1 }

      // update the image
      this.playerDiv.childNodes[0].setAttribute('src', Opts.powerURLs[this.power])

      // remove the mushroom
      playerPositionDiv.getElementsByClassName('mushroom')[0].remove()
    }

    mariomoveElement.play();

    // render the player to the player's new position
    this.render()

    // check to see if current player has won
    this.won()

    // set the new current player
    Evolution.newCurrentPlayer()
  }

  render() {
    document.getElementById(this.stringCoordinates()).appendChild(this.playerDiv)
  }

  createPlayerDiv() {
    var playerDiv = document.createElement('div')
    playerDiv.setAttribute('id', this.playerId)
    playerDiv.classList.add('player')
    // playerDiv.classList.add('grow')
    playerDiv.style.backgroundColor = this.color

    var nameElement = document.createElement('div')
    nameElement.classList.add('player-name')
    nameElement.textContent = this.name

    var imageElement = document.createElement('img')
    imageElement.classList.add('player-image')
    imageElement.setAttribute('src', Opts.powerURLs[0])

    playerDiv.appendChild(imageElement)
    playerDiv.appendChild(nameElement)

    this.playerDiv = playerDiv
  }

  // check to see if the previous move resulted in a won game
  won() {
    if (Evolution.currentPlayer.power == 3) {
      document.removeEventListener('keydown', Evolution.handleKeyDown)

      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'audio/champions.mp3');
      audioElement.load();
      audioElement.play();

      document.getElementById('win-text').textContent = Opts.wintext(Evolution.currentPlayer.name)

      $('#win-box-container').fadeTo(10000, 1, function() {
        document.getElementById('win-text').classList.add('animate_me')

        $('#win-text').fadeTo(1000, 1, function() {
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
