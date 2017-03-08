// game begins, start button? "Play New Game"
render() // or renderGame()

// Prompt Players or their names and add create player instances
capturePlayerNames()
// - capture player1 input, prompt('Player 1, Enter your name: ')  This can go into a variable we can use as innerText
// - capture player2 input, prompt('Player 2, Enter your name: ')  This can go into a variable we can use as innerText

// Alert Player to begin
gameBeginNotification() // alert(`${player1} you can begin)

var gameNotOver = true
while (true)
  // Game Begins w/ player 1 starting
  userInput() // grabs user input

  var turnCount = 0

  takeTurn(userInput) // turnCount += 1

  // this is what the move function may have.
  function takeTurn(userInput) // initiates logic for  moving around board and updating user's power

    // in move() Look into future cell to see what we can and can't do
    targetCoordinates = userInput.updateCoordinates(playerCoordinates)


    if valid(targetCoordinates) // NOT topRow, bottomRow, leftRow or rightRow, or occupied but opposite player's coordinates.
      if $(div targetCoordinates).innerText === "mushroom"

        updatePower() // makes body background flash like in intro
        removeMushroom() // replace mushroom div with userName div
        updateUserCoordinatesAndMoveDivs()


        if (checkWinner())  // if this.user.power > 3 return WINNER STUFF HAPPENS GAME OVER
          gameNotOver = false // change background color to something cool to notify and pop up
        else
          switchUserInstance()
          return takeTurn() // or move()?? // next player moves
        end
      else
        updateUserCoordinatesAndMoveDivs()
        switchUserInstance()
        takeTurn()
      end

    else

      alert('invalid move, please try again')
      switchUserInstance()
      return takeTurn()

    end
  end
end

------------------------------
function render()
function capturePlayerNames() // creates player instance
function userInput()
function gameBeginNotification()
function takeTurn()
function valid(tempCoordinates)

function updatePower()
function checkWinner() // returns true or false
function userInput()
function updateCoordinates()
function updateCell()
function gameOver()

function mushroom() {
  $(div id=XXX).innerText(this.player.name)
}
