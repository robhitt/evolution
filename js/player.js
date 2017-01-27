class Player {

  constructor() {
    this.playerId = Player.count += 1
    this.name = getName()
    this.power = 0;
    if (this.playerId === 1) {
      this.coordinates = [5,5]
    } else {
      this.coordinates = [1,1]
    }
  }




}






function getName() {
  return prompt("Please enter your name:");
}

Player.count = 0;
