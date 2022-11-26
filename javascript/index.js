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
  { name: "Shrimp1", img: "Shrimp1.png", forCat: true, forCanivore: true },
  { name: "Shrimp2", img: "Shrimp2.png", forCat: true, forCanivore: true },
  { name: "Shrimp3", img: "Shrimp3.png", forCat: true, forCanivore: true },
  { name: "Shrimp1", img: "Shrimp1.png", forCat: true, forCanivore: true },
  { name: "Shrimp2", img: "Shrimp2.png", forCat: true, forCanivore: true },
  { name: "Shrimp3", img: "Shrimp3.png", forCat: true, forCanivore: true },
  { name: "Shrimp1", img: "Shrimp1.png", forCat: true, forCanivore: true },
  { name: "Shrimp2", img: "Shrimp2.png", forCat: true, forCanivore: true },
  { name: "Shrimp3", img: "Shrimp3.png", forCat: true, forCanivore: true },
  { name: "Shrimp1", img: "Shrimp1.png", forCat: true, forCanivore: true },
  { name: "Shrimp2", img: "Shrimp2.png", forCat: true, forCanivore: true },
  { name: "Shrimp3", img: "Shrimp3.png", forCat: true, forCanivore: true },
  { name: "Shrimp1", img: "Shrimp1.png", forCat: true, forCanivore: true },
  { name: "Shrimp2", img: "Shrimp2.png", forCat: true, forCanivore: true },
  { name: "Shrimp3", img: "Shrimp3.png", forCat: true, forCanivore: true },
  { name: "Shrimp1", img: "Shrimp1.png", forCat: true, forCanivore: true },
  { name: "Shrimp2", img: "Shrimp2.png", forCat: true, forCanivore: true },
  { name: "Shrimp3", img: "Shrimp3.png", forCat: true, forCanivore: true },
];

const foods = [
  { name: "Pizza", img: "Pizza.png", forCat: false, forCanivore: true },
  { name: "Beet", img: "Beet.png", forCat: false, forCanivore: false },
  { name: "Berries", img: "Berries.png", forCat: false, forCanivore: false },
  { name: "Burger", img: "Burger.png", forCat: false, forCanivore: true },
  { name: "Carrote", img: "Carrote.png", forCat: false, forCanivore: false },
  { name: "Cheese", img: "Cheese.png", forCat: false, forCanivore: true },
  { name: "Dumplings", img: "Dumplings.png", forCat: false, forCanivore: true },
  { name: "Egg", img: "Egg.png", forCat: false, forCanivore: true },
  { name: "Egg2", img: "Egg2.png", forCat: false, forCanivore: true },
  { name: "Hotdog", img: "Hotdog.png", forCat: false, forCanivore: true },
  {
    name: "Mushrooms1",
    img: "Mushrooms1.png",
    forCat: false,
    forCanivore: false,
  },
  {
    name: "Mushrooms2",
    img: "Mushrooms2.png",
    forCat: false,
    forCanivore: false,
  },
  {
    name: "Mushrooms3",
    img: "Mushrooms3.png",
    forCat: false,
    forCanivore: false,
  },
  { name: "Potatos", img: "Potatos.png", forCat: false, forCanivore: false },
  { name: "Radish", img: "Radish.png", forCat: false, forCanivore: false },
  { name: "Roti1", img: "Roti1.png", forCat: false, forCanivore: true },
  { name: "Roti2", img: "Roti2.png", forCat: false, forCanivore: true },
  { name: "Sausage", img: "Sausage.png", forCat: false, forCanivore: true },
  { name: "Steak", img: "Steak.png", forCat: false, forCanivore: true },
  { name: "Sushi1", img: "Sushi1.png", forCat: false, forCanivore: true },
  { name: "Sushi2", img: "Sushi2.png", forCat: false, forCanivore: true },
  { name: "Sushi3", img: "Sushi3.png", forCat: false, forCanivore: true },
  { name: "Sushi4", img: "Sushi4.png", forCat: false, forCanivore: true },
  { name: "Tomato", img: "Tomato.png", forCat: false, forCanivore: false },
  { name: "Turkey", img: "Turkey.png", forCat: false, forCanivore: true },
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

window.onload = (e) => {
  gameDivs.map((game) => (game.style.display = "none"));
  //loadGame1();
  loadGame2();
  loadGame3();

  let cardNodes = game2Board.querySelectorAll(".card");
  let cardsElemArr = [...cardNodes];
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

playBtn3.onclick = () => {
  loadGame3();
  game3start();
};
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
          findCats.winingDialog.querySelector("annoncement").innerHTML = `
        You finished the game after ${findCats.pickedPairs} try! Joojoo graciously allows some petting!
        `;
        } else {
          findCats.winingDialog.style.display = "flex";
          findCats.winingDialog.querySelector("annoncement").innerHTML = `
        You finished the game in ${findCats.time/100} seconds! Joojoo graciously allows some petting!
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

function game3start() {
  //show the card for 3 seconds before turning
  flipAllcards();
  setTimeout(flipAllcards, 3000);
  let totalShrimps = 0;
  document.querySelectorAll(".card").forEach((card) => {
    if (card.getAttribute("data-name").indexOf("Shrimp") != -1) totalShrimps++;
  });
  console.log(totalShrimps);
  game3Board.onclick = (e) => {
    if (e.target.classList.contains("cardFace")) {
      card = e.target.parentNode;
      selectedCards.push(card);
      // turn only the unturned ones
      if (!card.classList.contains("turned")) {
        card.classList.add("turned");
      }
      //if the card is shrimp, we keep it turned
      if (findShrimps(card)) {
      }
    }
  };
}

function flipAllcards() {
  const allCards = document.querySelectorAll(".card");
  if (allCards.item(1).classList.contains("turned")) {
    allCards.forEach((card) => card.classList.remove("turned"));
  } else {
    allCards.forEach((card) => card.classList.add("turned"));
  }
}
