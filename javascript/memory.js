class Game2 {
  constructor(cards) {
    //take a array of card object wich has name and image properties
    this.cards = cards;
    this.pickedPairs = 0;
    this.rightPairs = 0;
    this.time = -1;
    this.timeLimit = 0;
    this.timer = null;
    this.timeLimited = false;
    this.finishedInTime = null;
    this.timerDomElem = null
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
  match(card1Name, card2Name) {
    return card1Name === card2Name;
    //compare only the card names
  }
  chronometer() {
    if (this.timeLimited)
      this.timer = setInterval(this.countMiliSeconds, 10);
  }

  countMiliSeconds() {
    //get starting time
    if(this.time=-1) this.time = this.timeLimit
    console.log(this.time)
    this.time--;
    console.log(this.time)
    if(this.timerDomElem != null) this.timerDomElem.innerText = "xx"
    if (this.time == 0) {
        this.stopChrometer;
    }
    //console.log(formatingTime(this.time))
  }

  stopChrometer() {
    clearInterval(this.timer);
  }
  stopByTimer(){

  }
  gameFinished() {
    if(this.rightPairs === this.cards.length / 2){
        this.stopChrometer()
        return true
    };
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
