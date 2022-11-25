class Game2{
    constructor(cards){
        //take a array of card object wich has name and image properties
        this.cards = cards;
        this.pickedPairs = 0;
        this.rightPairs = 0;
    }
    shuffle(){
        if (this.cards == undefined) return undefined
        //shuffle logic from right to left , return new cards
        // at same time change directly the order of this.cards
        for(let i = this.cards.length-1; i>0; i--){
            const cardHolder = this.cards[i]
            const newPos = randomIndexOf(i)
            this.cards[i] = this.cards[newPos]
            this.cards[newPos] = cardHolder
        }
    }
    match(card1Name, card2Name){
        return card1Name===card2Name
        //compare only the card names
    }

    gameFinished(){
        return this.rightPairs === this.cards.length/2
    }

}

class Game3 extends Game2{
    constructor(cards){
        super(cards)
        this.blood = 3;
    }

    gameFinished(){
        return this.blood ===0;
    }
}


function randomIndexOf(maxIndex){
    return Math.floor(Math.random()*maxIndex)
}



