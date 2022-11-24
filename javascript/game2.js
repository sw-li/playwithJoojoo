const cards = [
    {name:"cat1", img:"cat1.jpg"},
    {name:"cat2", img:"cat2.jpg"},
    {name:"cat3", img:"cat3.jpg"},
    {name:"cat4", img:"cat4.jpg"},
    {name:"cat5", img:"cat5.jpg"},
    {name:"cat6", img:"cat6.jpg"},
    {name:"cat7", img:"cat7.jpg"},
    {name:"cat8", img:"cat8.jpg"},
    {name:"cat1", img:"cat1.jpg"},
    {name:"cat2", img:"cat2.jpg"},
    {name:"cat3", img:"cat3.jpg"},
    {name:"cat4", img:"cat4.jpg"},
    {name:"cat5", img:"cat5.jpg"},
    {name:"cat6", img:"cat6.jpg"},
    {name:"cat7", img:"cat7.jpg"},
    {name:"cat8", img:"cat8.jpg"},
]




function loadGame2(){
    findCats.shuffle()
    let html= ""
    findCats.cards.forEach((cat) => {
        html += ` 
        <div class="card" name=${cat.name}>
        <div class="cardFace back" ></div>
        <div class="cardFace front" style="background-image: url(/images/cats/${cat.img});"> </div >
        </div>`
    })
    document.querySelector("#gameShengwei .gameArea").innerHTML = html

    const cards = document.querySelectorAll('.card')
    const cardsArr = [...cards]
    console.log(cards)
    addListeners()
}

const findCats = new Game2(cards)
const selectedCards = []



// add listeners to every card
function addListeners(){
    cards.forEach(card => {
        card.addEventListener("click", ()=>{
          // unflip precedent cards
          console.log("clicked")
          if(selectedCards.length != 0){
            selectedCards[0].classList.remove("turned")
            selectedCards[1].classList.remove("turned")
            selectedCards = []
        }
        //flip card
        if(! card.classList.contains("turned")) card.classList.add("turned")
        selectedCards.push(card)
        //if there is two cards turned check if they are the same
        if(selectedCards.length == 2){
            findCats.pickedPairs ++
        //if the same, add score and keep them turned
        // if not the same new round turn back
        if(findCats.match(selectedCards[0].name, selectedCards[1].name)){
            findCats.rightPairs ++
            selectedCards = []
            if(findCats.gameFinished()) endGame()
        }}
    
        })})
}


    
  
function endGame(){
    console.log(`you finished the game in ${findCats.pickedPairs}`)
}