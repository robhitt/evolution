
export default {

  // board options
  boardDivId: 'board',
  columns: 5,
  rows: 5,
  mushroomURL: 'images/mushrooms/mushroom1.png',

  // player options
  powerURLs: [ 'images/egg/egg4.png',
               'images/chicken/chicken6.png',
               'images/dinosaur/dinosaur4.png',
               'images/winner.gif' ],

  playerColors: [ '#00FF00', '#800080' ],
  playerStartingCoordinates: [ [1,1], [5,5] ],

  // intial prompt text
  initialPrompt: 'Players, enter your names:',

  // win text
  wintext: function (winner) {
    return `Congratulations, ${winner}!`
  },

  // set the player that is controlled by mobile swipes
  mobileControlledplayerId: 0

}
