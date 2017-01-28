
// this class handles the page wrapper size


class Page {
  constructor() {

    // get window size (window.innerHeight works better in mobile)
    this.mainWidth = window.innerWidth
    this.mainHeight = window.innerHeight

    this.preventDefaultforMobile()
    this.render()
    this.listenForResize()
    var temp = new MobileMovements()
  }

  render() {

   // set wrapper size to the window size
   document.getElementById('wrapper').style.width = this.mainWidth + 'px'
   document.getElementById('wrapper').style.height = this.mainHeight + 'px'
 };


  // prevent default behavior to prevent iphone dragging and bouncing
  // http://www.quirksmode.org/mobile/default.html
  preventDefaultforMobile() {
    document.ontouchmove = function (event) {
      event.preventDefault();
    };
  }

  listenForResize() {

    self = this
    // listen for resize and orientation changes and make adjustments
    // TO ADD: change positions and sizes of all boxes
    window.addEventListener('resize', function () {

      self.mainWidth = window.innerWidth;
      self.mainHeight = window.innerHeight;

      self.render()
      self.board.setSizeVariables()
      self.board.repositionCells()

    }, false); // bubbling phase
  }
}
