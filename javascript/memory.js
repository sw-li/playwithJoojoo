class Game2 {
  constructor(cards) {
    //take a array of card object wich has name and image properties
    this.cards = cards;
    this.pickedPairs = 0;
    this.rightPairs = 0;
    this.time = -1;
    this.timer = null;
    this.timeLimit = null;
    this.timerDom = null;
  }
  shuffle() {
    if (this.cards == undefined) return undefined;
    //shuffle logic from right to left , return new cards
    // at same time change directly the order of this.cards
    for (let i = this.cards.length - 1; i > 0; i--) {
      const cardHolder = this.cards[i];
      const newPos = randomIndexOf(i);
      this.cards[i] = this.cards[newPos];
      this.cards[newPos] = cardHolder;
    }
  }
  init(){
    this.timeLimit = parseInt(document.getElementById("timeLimit").value);
    this.timerDom = document.getElementById("chronometer");
  }
  match(card1Name, card2Name) {
    return card1Name === card2Name;
    //compare only the card names
  }

  chronometer() {
    console.log(this.timeLimit, this.timerDom)
    if (this.timeLimit !=0) {this.timer = setInterval(this.countTime, 10)}
    else{ console.log("time limit can't be 0")};
  }

  countTime() {
    //get starting time
    console.log(this.timeLimit)
    // when time is 0, stoo chronometer and stop game
  }

  stopChronometer() {
    clearInterval(this.timer);
  }

  stopGame(){
    document.querySelector("#game2 .gameArea .dialog").style.display = "flex"
    document.querySelector("#game2 .gameArea .annoncement").innerHTML = `You finished the game after ${findCats.pickedPairs} try`
  }
  gameFinished() {
    if(this.rightPairs === this.cards.length / 2){
        this.stopChronometer()
        return true
    }
    //if(this.timeLimit ==0 && this.time ==0) 
    return false
  }
}

class Game3 extends Game2 {
  constructor(cards) {
    super(cards);
    this.blood = 3;
  }

  gameFinished() {
    return this.blood === 0;
  }
}

//utility functions linked to memory game
function randomIndexOf(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function formatingTime(time) {
  let minute = computeTwoDigitNumber(Math.floor(time / 6000));
  let second = computeTwoDigitNumber(Math.floor((time % 6000) / 100));
  let miliscond = computeTwoDigitNumber(Math.floor(time % 100));
  return minute + ":" + second + "." + miliscond;
}
function computeTwoDigitNumber(value) {
  return `0${value}`.slice(-2);
}
