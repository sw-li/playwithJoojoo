const gameDivs = [...document.getElementsByClassName("gameDiv")];
const cats = [
  { name: "cat1", img: "cat1.jpg" },
  { name: "cat2", img: "cat2.jpg" },
  { name: "cat3", img: "cat3.jpg" },
  { name: "cat4", img: "cat4.jpg" },
  { name: "cat5", img: "cat5.jpg" },
  { name: "cat6", img: "cat6.jpg" },
  { name: "cat7", img: "cat7.jpg" },
  { name: "cat8", img: "cat8.jpg" },
  { name: "cat9", img: "cat9.jpg" },
  { name: "cat10", img: "cat10.jpg" },
  { name: "cat11", img: "cat11.jpg" },
  { name: "cat12", img: "cat12.jpg" },
  { name: "cat13", img: "cat13.jpg" },
  { name: "cat14", img: "cat14.jpg" },
  { name: "cat15", img: "cat15.jpg" },
  { name: "cat16", img: "cat16.jpg" },
];

const shrimps = [
  { name: "Shrimp1", img: "Shrimp1.png", forCat: true, color: "green" },
  { name: "Shrimp2", img: "Shrimp2.png", forCat: true, color: "green" },
  { name: "Shrimp3", img: "Shrimp3.png", forCat: true, color: "green" },
  { name: "Shrimp1", img: "Shrimp1.png", forCat: true, color: "green" },
  { name: "Shrimp2", img: "Shrimp2.png", forCat: true, color: "green" },
  { name: "Shrimp3", img: "Shrimp3.png", forCat: true, color: "green" },
  { name: "Shrimp1", img: "Shrimp1.png", forCat: true, color: "green" },
  { name: "Shrimp2", img: "Shrimp2.png", forCat: true, color: "green" },
  { name: "Shrimp3", img: "Shrimp3.png", forCat: true, color: "green" },
  { name: "Shrimp1", img: "Shrimp1.png", forCat: true, color: "green" },
  { name: "Shrimp2", img: "Shrimp2.png", forCat: true, color: "green" },
  { name: "Shrimp3", img: "Shrimp3.png", forCat: true, color: "green" },
  { name: "Shrimp1", img: "Shrimp1.png", forCat: true, color: "green" },
  { name: "Shrimp2", img: "Shrimp2.png", forCat: true, color: "green" },
  { name: "Shrimp3", img: "Shrimp3.png", forCat: true, color: "green" },
  { name: "Shrimp1", img: "Shrimp1.png", forCat: true, color: "green" },
  { name: "Shrimp2", img: "Shrimp2.png", forCat: true, color: "green" },
  { name: "Shrimp3", img: "Shrimp3.png", forCat: true, color: "green" },
];

const foods = [
  { name: "Pizza", img: "Pizza.png", forCat: false, color: "green" },
  { name: "Beet", img: "Beet.png", forCat: false, color: "red" },
  { name: "Berries", img: "Berries.png", forCat: false, color: "red" },
  { name: "Burger", img: "Burger.png", forCat: false, color: "green" },
  { name: "Carrote", img: "Carrote.png", forCat: false, color: "red" },
  { name: "Cheese", img: "Cheese.png", forCat: false, color: "green" },
  { name: "Dumplings", img: "Dumplings.png", forCat: false, color: "green" },
  { name: "Egg", img: "Egg.png", forCat: false, color: "green" },
  { name: "Egg2", img: "Egg2.png", forCat: false, color: "green" },
  { name: "Hotdog", img: "Hotdog.png", forCat: false, color: "green" },
  { name: "Mushrooms1", img: "Mushrooms1.png", forCat: false, color: "red" },
  { name: "Mushrooms2", img: "Mushrooms2.png", forCat: false, color: "red" },
  { name: "Mushrooms3", img: "Mushrooms3.png", forCat: false, color: "red" },
  { name: "Potatos", img: "Potatos.png", forCat: false, color: "red" },
  { name: "Radish", img: "Radish.png", forCat: false, color: "red" },
  { name: "Roti1", img: "Roti1.png", forCat: false, color: "green" },
  { name: "Roti2", img: "Roti2.png", forCat: false, color: "green" },
  { name: "Sausage", img: "Sausage.png", forCat: false, color: "green" },
  { name: "Steak", img: "Steak.png", forCat: false, color: "green" },
  { name: "Sushi1", img: "Sushi1.png", forCat: false, color: "green" },
  { name: "Sushi2", img: "Sushi2.png", forCat: false, color: "green" },
  { name: "Sushi3", img: "Sushi3.png", forCat: false, color: "green" },
  { name: "Sushi4", img: "Sushi4.png", forCat: false, color: "green" },
  { name: "Tomato", img: "Tomato.png", forCat: false, color: "red" },
  { name: "Turkey", img: "Turkey.png", forCat: false, color: "green" },
];

// for game 2 and 3
let selectedCards = [];
let randomCatsForGame = genericShuffle(cats).splice(0, 8);
let findCats = new Game2(randomCatsForGame.concat(randomCatsForGame));

let shripsForGame = genericShuffle(shrimps).splice(0, 5);
let otherFood = genericShuffle(foods).splice(0, 11);
let findShrimps = new Game3(shripsForGame.concat(otherFood));

const checkbox = document.querySelector("#checkbox");
const playBtn2 = document.querySelector("#game2 .playPause");
const playBtn3 = document.querySelector("#game3 .playPause");
const game2Board = document.querySelector("#game2 .gameArea");
const game3Board = document.querySelector("#game3 .gameArea");
const levelUpBtn = document.getElementById("levelUpBtn");
const game3replayBtn = document.getElementById("lostAllBloodBtn");
const game3HitMsg = document.getElementById("game3HitMsg");

window.onload = (e) => {
  gameDivs.map((game) => (game.style.display = "none"));
  //loadGame1();
  loadGame2();
  loadGame3();

  let cardNodes = game2Board.querySelectorAll(".card");
  let cardsElemArr = [...cardNodes];
  let audio = document.querySelector("audio");
  audio.volume = 0.05;

  //try to load image src first
  veggieAndFruit.forEach(element => element.img.src = element.path);
  meatAndFish.forEach(element => element.img.src = element.path);

  const onMouseMove = (e) => {
    let rect = canvas.getBoundingClientRect();
    player.x = e.clientX - rect.left - Math.floor(player.w / 2) - 2;
    player.y = e.clientY - rect.top - Math.floor(player.h / 2) - 2;
    joojooImg.style.left = e.clientX + "px";
    joojooImg.style.top = e.clientY + "px";
  };

  //load click action to start game
  playBtn1.onclick = () => {
    gameStatusDom.blood.innerText = heart.repeat(3);
    console.log("Game started");
    playGame1();
  };

  function playGame1() {
    canvas.addEventListener("mousemove", onMouseMove);
    gameObj.clear();
    gameObj.interval = setInterval(updateGame1, 20);
  }
};

//main page transition on click
document.onclick = (e) => {
  if (e.target.classList.contains("to1")) {
    document.getElementById("entries").style.display = "none";
    document.getElementById("game1").style.display = "flex";
  }
  if (e.target.classList.contains("to2")) {
    document.getElementById("entries").style.display = "none";
    document.getElementById("game2").style.display = "flex";
    loadGame2();
  }
  if (e.target.classList.contains("to3")) {
    document.getElementById("entries").style.display = "none";
    document.getElementById("game3").style.display = "flex";
  }
  if (e.target.id == "backBtn") {
    document.getElementById("entries").style.display = "flex";
    gameDivs.map((game) => (game.style.display = "none"));
  }
  if (e.target.classList.contains("annoncementBtn")) {
    e.target.parentNode.style.display = "none";
    loadGame2();
  }
};

playBtn2.onclick = () => {
  loadGame2();
  game2Start();
};

function loadGame2() {
  findCats.shuffle();
  findCats.pickedPairs = 0;
  findCats.rightPairs = 0;
  document.querySelector(".picked").innerHTML =
    "Nomber of tentation: " + findCats.pickedPairs;
  document.querySelector(".right").innerHTML =
    "Right pairs: " + findCats.rightPairs;
  let html = "";
  game2Board.innerHTML = "";
  findCats.cards.forEach((cat) => {
    html += ` 
      <div class="card" data-name=${cat.name}>
      <div class="cardFace back" ></div>
      <div class="cardFace front" style="background-image: url(/images/cats/${cat.img});"> </div >
      </div>`;
  });
  game2Board.innerHTML = html;
}

// game2 manipulation
function game2Start() {
  //if timed
  if (findCats.timeLimited == true) {
    findCats.chronometer();
  }
  game2Board.onclick = (e) => {
    if (e.target.classList.contains("cardFace")) {
      // do the game rules here
      card = e.target.parentNode;
      // check only between two cards
      if (selectedCards.length === 2) {
        selectedCards[0].classList.remove("turned");
        selectedCards[1].classList.remove("turned");
        selectedCards = [];
      }
      // turn only the unturned ones
      if (!card.classList.contains("turned")) {
        card.classList.add("turned");
        selectedCards.push(card);
      }
      //if we have a pair, check pair
      if (selectedCards.length === 2) {
        findCats.pickedPairs++;
        if (
          findCats.match(
            selectedCards[0].dataset.name,
            selectedCards[1].dataset.name
          )
        ) {
          findCats.rightPairs++;
          selectedCards = [];
        } else {
        }
      }
      //update score
      document.querySelector(".picked").innerHTML =
        "Nomber of tentation: " + findCats.pickedPairs;
      document.querySelector(".right").innerHTML =
        "Right pairs: " + findCats.rightPairs;
      // winning condition here.
      if (findCats.gameFinished()) {
        if (findCats.timeLimited) {
          findCats.winingDialog.style.display = "flex";
          findCats.winingDialog.querySelector(".annoncement").innerHTML = `
        You finished the game in ${
          findCats.time / 100
        } seconds! Joojoo graciously allows some petting!
        `;
        } else {
          findCats.winingDialog.style.display = "flex";
          findCats.winingDialog.querySelector(".annoncement").innerHTML = `
          You finished the game after ${findCats.pickedPairs} try! Joojoo graciously allows some petting!
          `;
        }
      }
    }
  };
}

//Use checkbox to decide if the game is timed
function timeGame() {
  findCats.timerDom = document.getElementById("chronoLimit");
  findCats.timeLimit = document.getElementById("timeLimit").value;
  findCats.time = findCats.timeLimit * 100;
  if (checkbox.checked) {
    findCats.timeLimited = true;
    findCats.timerDom.innerText = formatingTime(findCats.timeLimit * 100);
  } else {
    findCats.stopChronometer();
    findCats.timeLimited = false;
    findCats.timerDom.innerText = "00:00.00";
  }
}

function loadGame3() {
  findShrimps.shuffle();
  let html = "";
  game3Board.innerHTML = "";
  findShrimps.cards.forEach((food) => {
    html += ` 
      <div class="card" data-name=${food.name}>
      <div class="cardFace back" ></div>
      <div class="cardFace front" style="background-image: url(/images/foods/${food.img});"> </div >
      </div>`;
  });
  game3Board.innerHTML = html;
}

//heart emoji in js
var heart = "\u2665";
var emptyHeart = "\u2661";
var delayed;
playBtn3.onclick = () => {
  findShrimps.reinit();
  game3start();
  loadGame3();
  flipAllcardsTwice(findShrimps.timeToMemorize);
};
game3replayBtn.onclick = () => {
  findShrimps.reinit();
  loadGame3();
  flipAllcardsTwice(findShrimps.timeToMemorize);
};

levelUpBtn.onclick = () => {
  findShrimps.rightGuess = 0;
  findShrimps.shuffle();
  loadGame3();
  flipAllcardsTwice(findShrimps.timeToMemorize);
};

function game3start() {
  // for now it's 5 shrimps fixed.
  /*  let totalShrimps = 0;
  document.querySelectorAll(".card").forEach((card) => {
    if (card.getAttribute("data-name").indexOf("Shrimp") != -1) totalShrimps++;
  }); */
  game3Board.onclick = (e) => {
    if (e.target.classList.contains("cardFace")) {
      card = e.target.parentNode;
      console;
      // turn only the unturned ones
      if (!card.classList.contains("turned")) {
        //turn back the wrong card
        if (selectedCards.length === 1) {
          selectedCards[0].classList.remove("turned");
          selectedCards = [];
        }
        //temporarly save the card to selectedCards array so that
        //we can turn it next step instead of right away
        selectedCards.push(card);
        card.classList.add("turned");
      }

      if (findShrimps.isShrimp(card)) {
        //if the card is shrimp, we keep it turned
        //clean the holder array and add one to right guess
        selectedCards = [];
        if (findShrimps.levelComplet()) {
          //fire up the next level dialog
          //shuffle the cards (eventually change the cards collection of the game)
          //speed up the memorizing time
        }
      } else {
        //if the card is not shrimp, we lose one blood
        findShrimps.blood--;
        if (findShrimps.blood == 2)
          game3HitMsg.innerText = "-1 Hissss, what's this?";
        if (findShrimps.blood == 1)
          game3HitMsg.innerText = "-1 Last call, no shrimps no love!";
        if (findShrimps.blood == 0)
          game3HitMsg.innerText = "-1 Love is overated";
        game3HitMsg.style.opacity = 1;
        fadeOutEffect(game3HitMsg);

        console.log(findShrimps.bloodDom);

        findShrimps.bloodDom.innerText =
          emptyHeart.repeat(3 - findShrimps.blood) +
          heart.repeat(findShrimps.blood);
        //fire up a warning anoncement that you are not good
        //do it later, it's not that important
      }
      findShrimps.gameEnd();
    }
  };
}

function flipAllcardsTwice(timeSpan) {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => card.classList.add("turned"));
  console.log(timeSpan);
  setTimeout(function () {
    allCards.forEach((card) => card.classList.remove("turned"));
  }, timeSpan);
}

// game one
/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const playBtn1 = document.querySelector("#game1 .playPause");
let pops = [];
const joojooImg = document.getElementById("playerImg");
const player = new Composant(0, 0, "transparent");
player.w = 30;
player.h = 30;
player.speedX = 0;
player.speedY = 0;
const gameObj = {
  frames: 0,
  interval: undefined,
  score: 0,
  blood: 3,
  hitMsg: "-1 blood",
  speedUp: 0,
  cunter: 0,
  clear: function () {
    ctx.clearRect(0, 0, 500, 500);
  },
  stop: function () {
    // reinitialize everything
    this.reinit();
  },
  reinit: function () {
    this.frames = 0;
    clearInterval(this.interval);
    this.score = 0;
    this.blood = 3;
    this.clear();
  },
  endCheck: function () {
    return this.blood === 0;
  },
};
const game1OverDialog = document.getElementById("game1OverDialog");
game1OverDialog.querySelector(".annoncementBtn").onclick = stop
const gameStatusDom = {
  score: document.querySelector("#game1 .score"),
  blood: document.querySelector("#game1 .life"),
};

function updateGame1() {
  gameObj.clear();
  gameObj.frames++;
  if (pops.length > 0) pops.forEach((compo) => compo.update());
  player.update();
  checkColision();
  if (gameObj.frames % 10 === 0) {
    pops.push(
      new Composant(
        randomX(),
        0,
        redOrGreen(),
        randomSpeedFactor() + gameObj.speedUp
      )
    );
  }
  // garbage collecting
  for (let i = 0; i < pops.length; i++) {
    if (pops[i].y > 550) {
      pops.splice(i, 1);
      gameObj.cunter++;
    }
  }

  if (gameObj.cunter === 50) {
    gameObj.cunter = 0;
    gameObj.speedUp += 0.1;
  }

  if (gameObj.endCheck()) {
    game1OverDialog.querySelector(".annoncement").innerHTML =
      "Oups, GAME OVER!";
  }
}

function stop() {
  pops = [];
  gameObj.reinit();
}
function randomX() {
  return Math.floor(Math.random() * 480);
}
function randomSpeedFactor() {
  return Math.random() + 0.5;
}
function redOrGreen() {
  const index = Math.random();
  if (index < 0.9) return "red";
  return "green";
}

function checkColision() {
  let i = 0;
  while (i < pops.length) {
    if (player.colideWith(pops[i]) && gameObj.blood > 0) {
        if(pops[i].color =="red") {
            gameObj.blood--;
            gameStatusDom.blood.innerText =
              emptyHeart.repeat(3 - gameObj.blood) +
              heart.repeat(gameObj.blood);
            if (gameObj.endCheck()) {
              game1OverDialog.style.display = "flex";
            }
          }
        if(pops[i].color =="green"){
          gameObj.score++;
          gameStatusDom.score.innerText = "Score: " + gameObj.score;
        }
      pops.splice(i, 1);
    }else{
      i++;
    }
  }
}
