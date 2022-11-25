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
  { name: "cat1", img: "cat1.jpg" },
  { name: "cat2", img: "cat2.jpg" },
  { name: "cat3", img: "cat3.jpg" },
  { name: "cat4", img: "cat4.jpg" },
  { name: "cat5", img: "cat5.jpg" },
  { name: "cat6", img: "cat6.jpg" },
  { name: "cat7", img: "cat7.jpg" },
  { name: "cat8", img: "cat8.jpg" },
];
let selectedCards = [];
const findCats = new Game2(cats);
const game2Board = document.querySelector("#game2 .gameArea");
const game3Board = document.querySelector("#game3 .gameArea");

window.onload = (e) => {
  gameDivs.map((game) => (game.style.display = "none"));
  loadGame2();

  //HTML page ttransition

  document.onclick = (e) => {
    if (e.target.classList.contains("to1")) {
      document.getElementById("entries").style.display = "none";
      document.getElementById("game1").style.display = "flex";
    }
    if (e.target.classList.contains("to2")) {
      document.getElementById("entries").style.display = "none";
      document.getElementById("game2").style.display = "flex";
      loadGame2()
    }
    if (e.target.classList.contains("to3")) {
      document.getElementById("entries").style.display = "none";
      document.getElementById("game3").style.display = "flex";
    }
    if (e.target.id == "backBtn") {
      document.getElementById("entries").style.display = "flex";
      gameDivs.map((game) => (game.style.display = "none"));
    }
  };

  // game 2

  function loadGame2() {
    findCats.shuffle();
    let html = "";
    game2Board.innerHTML = "";
    findCats.cards.forEach((cat) => {
      html += ` 
        <div class="card" name=${cat.name}>
        <div class="cardFace back" ></div>
        <div class="cardFace front" style="background-image: url(/images/cats/${cat.img});"> </div >
        </div>`;
    });
    game2Board.innerHTML = html;
  }
    let cardNodes = game2Board.querySelectorAll(".card")
    let cardsElemArr = [...cardNodes];
    cardNodes.forEach(card => {
      card.addEventListener("click", ()=>{
        console.log("clicked")
      })
    })
/* 
    cards.forEach(card => {
      card.onclick =  () => {
        // unflip precedent cards
        console.log("clicked");
         if (selectedCards.length == 2) {
          selectedCards[0].classList.remove("turned");
          selectedCards[1].classList.remove("turned");
          selectedCards = [];
        }
        //flip card
        if (!card.classList.contains("turned")) card.classList.add("turned");
        selectedCards.push(card);
        //if there is two cards turned check if they are the same
        if (selectedCards.length == 2) {
          findCats.pickedPairs++;
          //if the same, add score and keep them turned
          // if not the same new round turn back
          if (findCats.match(selectedCards[0].name, selectedCards[1].name)) {
            findCats.rightPairs++;
            selectedCards = [];
            if (findCats.gameFinished()) endGame();
          }
        } 
      }
    }); */
  }


function endGame() {
  console.log(`you finished the game in ${findCats.pickedPairs}`);
}
