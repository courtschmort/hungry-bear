export class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  playerGotEaten() {
    return (this.foodLevel < 1);
  }

  feed() {
    if (this.playerGotEaten()) return false;
    
    this.foodLevel = 10;
    return true;
  }


}
