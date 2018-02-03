export default class Page {
  constructor() {

    // get the window size (window.innerHeight works better in mobile)
    this.mainWidth = window.innerWidth
    this.mainHeight = window.innerHeight

    // prevent default scrolling behavior for mobile devices
    this.preventDefaultforMobile()

    // render the page
    this.render()

    // set an event listener when the window is resized
    this.listenForResize()
  }

  render() {
   // set the wrapper size to the window size
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
    var that = this

    // listen for resize and orientation changes
    window.addEventListener('resize', function () {

      // re-set the page width and height
      that.mainWidth = window.innerWidth;
      that.mainHeight = window.innerHeight;

      // reset the wrapper width and height
      that.render()

      // re-set the board size and cell sizes
      that.board.setSizeVariables()

      // resize and reposition the cells
      that.board.repositionCells()

    }, false); // bubbling phase
  }
}
