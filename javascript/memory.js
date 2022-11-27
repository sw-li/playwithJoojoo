class Game2 {
  constructor(cards) {
    //take a array of card object wich has name and image properties
    this.cards = cards;
    this.pickedPairs = 0;
    this.rightPairs = 0;
    this.timer = null;
    this.timeLimit = 0;
    this.time = 0;
    this.timerDom = null;
    this.winingDialog = document.getElementById("winingDialog")
    this.timeUpDialog = document.getElementById("timeUpDialog")
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
    if (this.timeLimit !=0) {this.timer = setInterval(()=>{this.countDown()}, 10)}
    else{ console.log("time limit can't be 0")}; 
  }

  countDown() {
    // when time is 0, stoo chronometer and stop game
    console.log()
    this.time--;
    this.timerDom.innerText = formatingTime(this.time) 
    if(this.time ==0){
        this.stopGame()
    }
  }

  stopChronometer() {
    clearInterval(this.timer);
  }

  stopGame(){
    this.stopChronometer()
    this.timeUpDialog.style.display = "flex"
    console.log(this.timeUpDialog.children)
    this.timeUpDialog.children.item(0).innerText = `You failed to match all the photos in time, Joojoo won't let you pet her :(`
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

class Game3 extends Game2{
  constructor(cards) {
    super(cards)
    this.score = 0;
    this.timeToMemorize = 3000;
    this.nbShrimps=5;
    this.rightGuess = 0
    this.blood = 3;
    this.bloodDom = document.getElementById("blood")
    this.levelUpDialog = document.getElementById("levelUp")
    this.bloodEndDialog = document.getElementById("lostAllBlood")
    this.levelDom=document.querySelector("#game3 .gameboard .score")
  }

  isShrimp(card){
    if(card.getAttribute("data-name").indexOf("Shrimp") !=-1){
        console.log("Yummy!")
        this.rightGuess++
        return true
    }
    return false
  }

  reinit(){
    this.score = 0;
    this.timeToMemorize = 3000;
    this.nbShrimps=5;
    this.rightGuess = 0
    this.blood = 3;
  }

  levelComplet(){
    console.log(this.rightGuess, this.nbShrimps,this.score,this.levelDom)
    if(this.rightGuess === this.nbShrimps){
        this.score++
        this.levelDom.innerText = this.score
        console.log("level up!")
        // fire up the levelUp dialog
        this.levelUpDialog.style.display = "flex"
        return true
    }
    return false
  }

  gameEnd() {
    if(this.blood === 0) {
      //fire up the end game dialog
      if(this.score === 0){
        this.bloodEndDialog.querySelector(".annoncement").innerHTML = "You are dead to Joojoo. Hiss!"
      }else if(this.score<3){
        this.bloodEndDialog.querySelector(".annoncement").innerHTML = "Ok, with this little offering, you may only kiss Joojoo's head!"
      }else if(this.score<6){
        this.bloodEndDialog.querySelector(".annoncement").innerHTML = "Not bad not bad, you may gently caresse Joojoo"
      }else{
        this.bloodEndDialog.querySelector(".annoncement").innerHTML = "Joojoo declares that you are her first class payson, you may cuddle the queen!"
      }
      this.bloodEndDialog.style.display = "flex"
      return true
    }
    return false
  }
}


function genericShuffle(arr){
    if(arr!=undefined){
        for(let i = arr.length-1; i>0; i--){
            const cardHolder = arr[i]
            const newPos = randomIndexOf(i)
            arr[i] = arr[newPos]
            arr[newPos] = cardHolder
        }
        return arr
    }
    return []
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
