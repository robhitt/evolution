class Player {

  constructor() {
    this.playerId = Player.count += 1
//    this.name = this.getName()
    this.power = 0
    this.imageURL = 'egg/egg4.png'

    if (this.playerId === 1) {
      this.coordinates = [5,5]
      this.color = '#00FF00'
    } else {
      this.coordinates = [1,1]
      this.color = '#800080'
    }
  }

  getName() {
    return prompt("Please enter your name:", "name here");
  }

  stringCoordinates() {
      return `[${this.coordinates.toString()}]`
  }

  emptyDiv(coordinates) {
//    document.getElementById(coordinates).textContent = " "
    document.getElementById(coordinates).style.backgroundColor = 'white'
  }

  // paramater will be something in this array ['left', 'right', 'up', 'down']
  validMove(potentialDirection) {

    switch (potentialDirection) {
      case 'left':
        if (document.getElementById(r.stringCoordinates()).classList.contains('leftRow')) {
          // alert('Moving left is not valid, please try again')

          Evolution.flash(potentialDirection)
          return false
        }
        break;

      case 'right':
        if (document.getElementById(r.stringCoordinates()).classList.contains('rightRow')) {
          Evolution.flash(potentialDirection)
          return false
        }
        break;

      case 'up':
        if (document.getElementById(r.stringCoordinates()).classList.contains('topRow')) {
          Evolution.flash(potentialDirection)
          return false
        }
        break;

      case 'down':
        if (document.getElementById(r.stringCoordinates()).classList.contains('bottomRow')) {
          Evolution.flash(potentialDirection)
          return false
        }
        break;

    }

    return true
  }



  // paramater will be something in this array ['left', 'right', 'up', 'down']
  move(validDirection) {

    // empty the old div
    this.emptyDiv(this.stringCoordinates())

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

    this.render()
  }

// ADD VALID MOVE IN HERE?
  keyPress() {


    document.addEventListener('keydown', function(event) {

      console.log('listening for key presses')

    if(event.keyCode == 37) {
      console.log('left key was pushed')
      if (Evolution.currentPlayer.validMove('left')) {
        Evolution.currentPlayer.move('left')
      }
    }
    else if(event.keyCode == 39) {
      console.log('right key was pushed')
      if (Evolution.currentPlayer.validMove('right')) {
        Evolution.currentPlayer.move('right')
      }
      // if (evolution.currentPlayer.validMove('right')) {
      // evolution.currentPlayer.move('right')
      // }
    }
    else if(event.keyCode == 38) {
//        alert('Up was pressed');
      console.log('up key was pushed')
      if (Evolution.currentPlayer.validMove('up')) {
        Evolution.currentPlayer.move('up')
      }

    }
    else if(event.keyCode == 40) {
//        alert('Down was pressed');
      console.log('down key was pushed')
      if (Evolution.currentPlayer.validMove('down')) {
        Evolution.currentPlayer.move('down')
      }

    }
    else if(event.keyCode == 65) {
//        alert('A was pressed');
    }
    else if(event.keyCode == 83) {
//        alert('S was pressed');
    }
    else if(event.keyCode == 68) {
//        alert('D was pressed');
    }
    else if(event.keyCode == 87) {
//        alert('W was pressed');
    }
    // q = 81
    // z = 90
    // ? = 191











  });


  }



  render() {
    // if ( validMove(potentialDirection) ) {
      // document.getElementById(r.stringCoordinates()).textContent = r.name
      var playerDiv = document.getElementById(Evolution.currentPlayer.stringCoordinates())



      // ADD this.imageURL to player class
      // let imageElement = document.createElement('img')
      // imageElement.classList.add('cellImage')
      //
      // var imageName
        switch(this.power) {
          case 0:
            this.imageURL = 'egg/egg4.png'
          break;
          case 1:
            this.imageURL = 'chicken/chicken6.png'
          break;
          case 2:
            this.imageURL = 'dinosaur/dinosaur4.png'
          case 3:
            this.imageURL = 'dinosaur/dinosaur3.png'
          break;
        }

        playerDiv.style.backgroundColor = Evolution.currentPlayer.color
        playerDiv.getElementsByClassName('cellImage')[0].setAttribute('src', 'images/' + this.imageURL);
    // }

  }

}

Player.count = 0;



//Game.playerTurn [1,2,3,4,5]
