// source: http: //stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
class MobileMovements {
  constructor () {
    this.xDown = null
    this.yDown = null


    var self = this
    document.addEventListener('touchstart', self.handleTouchStart, false);
    document.addEventListener('touchmove', self.handleTouchMove, false);
  }

  handleTouchStart(evt) {
      this.xDown = evt.touches[0].clientX;
      this.yDown = evt.touches[0].clientY;
  };

  handleTouchMove(evt) {
      if ( ! this.xDown || ! this.yDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = this.xDown - xUp;
      var yDiff = this.yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
          if ( xDiff > 0 ) {
              if (Evolution.allPlayers[MobileMovements.controlledplayerId].validMove('left')) {
                Evolution.allPlayers[MobileMovements.controlledplayerId].move('left')
              }
          } else {
            if (Evolution.allPlayers[MobileMovements.controlledplayerId].validMove('right')) {
              Evolution.allPlayers[MobileMovements.controlledplayerId].move('right')
            }
          }
      } else {
          if ( yDiff > 0 ) {
            if (Evolution.allPlayers[MobileMovements.controlledplayerId].validMove('up')) {
              Evolution.allPlayers[MobileMovements.controlledplayerId].move('up')
            }
          } else {
            if (Evolution.allPlayers[MobileMovements.controlledplayerId].validMove('down')) {
              Evolution.allPlayers[MobileMovements.controlledplayerId].move('down')
            }

          }
      }
      /* reset values */
      this.xDown = null;
      this.yDown = null;
  };


}
