class Composant{
  constructor(x,y,color,speedFactor=1){
      this.x = x
      this.y = y
      this.color = color
      this.w = 15
      this.h = 15
      this.bufferSize = 1
      this.speedX = 2* positifOrNegatif()
      this.speedY = 2
      this.speedFactor = speedFactor
  }
  newPos(){
      if(this.x <0 || this.x > 480) this.speedX *= -1
      this.x += this.speedX*this.speedFactor
      this.y += this.speedY*this.speedFactor
  }
  update(){
      let ctx = document.querySelector("canvas").getContext("2d")
      this.newPos()
      ctx.fillStyle=this.color
      ctx.fillRect(this.x, this.y,this.w,this.h)
  }
  left(){
      return this.x + this.bufferSize
  }
  right(){
      return (this.x +this.w - this.bufferSize)
  }
  top(){
      return this.y+this.bufferSize
  }
  bottom(){
      return (this.y+ this.h - this.bufferSize)
  }

  colideWith(composant){
      return !(this.bottom() < composant.top() || this.top()>composant.bottom() || this.right()<composant.left() ||this.left()>composant.right())
  }
}

class imgComposant extends Composant{
    constructor(x,y,color,speedFactor=1){
        super(x,y,color,speedFactor)
        this.w = 30
        this.h = 30
        this.bufferSize = 3
        this.speedX = 2* positifOrNegatif()
        this.speedY = 2
        this.speedFactor = speedFactor
        this.img = randomImg(this.color)
    }
    update(){
        let ctx = document.querySelector("canvas").getContext("2d")
        this.newPos()
        ctx.drawImage(this.img, this.x,this.y,this.w,this.h)
    }
}



function positifOrNegatif(){
  let index = Math.random()
  if(index>0.5) return 1
  return -1
}


const veggieAndFruit = [
    { imgElem: new Image(),name: "Apple", path: "./images/foods/Apple.png", color: "red"},
    { imgElem: new Image(),name: "Banana", path: "./images/foods/Banana.png", color: "red"},
    { imgElem: new Image(),name: "Beet", path: "./images/foods/Beet.png", color: "red"},
    { imgElem: new Image(),name: "Berries", path: "./images/foods/Berries.png", color: "red"},
    { imgElem: new Image(),name: "Carrote", path: "./images/foods/Carrote.png", color: "red"},
    { imgElem: new Image(),name: "Cherry", path: "./images/foods/Cherry.png", color: "red"},
    { imgElem: new Image(),name: "Grapes", path: "./images/foods/Grapes.png", color: "red"},
    { imgElem: new Image(),name: "Lemon", path: "./images/foods/Lemon.png", color: "red"},
    { imgElem: new Image(),name: "Mushrooms1", path: "./images/foods/Mushrooms1.png", color: "red"},
    { imgElem: new Image(),name: "Mushrooms2", path: "./images/foods/Mushrooms2.png", color: "red"},
    { imgElem: new Image(),name: "Mushrooms3", path: "./images/foods/Mushrooms3.png", color: "red"},
    { imgElem: new Image(),name: "Orange", path: "./images/foods/Orange.png", color: "red"},
    { imgElem: new Image(),name: "Pineapple", path: "./images/foods/Pineapple.png", color: "red"},
    { imgElem: new Image(),name: "Potatos", path: "./images/foods/Potatos.png", color: "red"},
    { imgElem: new Image(),name: "Radish", path: "./images/foods/Radish.png", color: "red"},
    { imgElem: new Image(),name: "Strawberry", path: "./images/foods/Strawberry.png", color: "red"},
    { imgElem: new Image(),name: "Watermelon", path: "./images/foods/Watermelon.png", color: "red"},
]

const meatAndFish =[
    { imgElem: new Image(),name: "Bacon", path: "./images/foods/Bacon.png", color: "green" },
    { imgElem: new Image(),name: "Bacon_dish", path: "./images/foods/Bacon_dish.png", color: "green" },
    { imgElem: new Image(),name: "Burger", path: "./images/foods/Burger.png", color: "green" },
    { imgElem: new Image(),name: "Burger1", path: "./images/foods/Burger1.png", color: "green" },
    { imgElem: new Image(),name: "Drumstick", path: "./images/foods/Drumstick.png", color: "green" },
    { imgElem: new Image(),name: "Cheese", path: "./images/foods/Cheese.png", color: "green" },
    { imgElem: new Image(),name: "Dumplings", path: "./images/foods/Dumplings.png", color: "green" },
    { imgElem: new Image(),name: "Egg", path: "./images/foods/Egg.png", color: "green" },
    { imgElem: new Image(),name: "Egg2", path: "./images/foods/Egg2.png", color: "green" },
    { imgElem: new Image(),name: "Hotdog", path: "./images/foods/Hotdog.png", color: "green" },
    { imgElem: new Image(),name: "Meatball", path: "./images/foods/Meatball.png", color: "green" },
    { imgElem: new Image(),name: "Pizza", path: "./images/foods/Pizza.png", color: "green" },
    { imgElem: new Image(),name: "Pizza 2", path: "./images/foods/Pizza 2.png", color: "green" },
    { imgElem: new Image(),name: "Roti1", path: "./images/foods/Roti1.png", color: "green" },
    { imgElem: new Image(),name: "Roti2", path: "./images/foods/Roti2.png", color: "green" },
    { imgElem: new Image(),name: "Sausage", path: "./images/foods/Sausage.png", color: "green" },
    { imgElem: new Image(),name: "Steak", path: "./images/foods/Steak.png", color: "green" },
    { imgElem: new Image(),name: "Steak1", path: "./images/foods/Steak1.png", color: "green" },
    { imgElem: new Image(),name: "Steak_dish", path: "./images/foods/Steak_dish.png", color: "green" },
    { imgElem: new Image(),name: "Shrimp1", path: "./images/foods/Shrimp1.png", color: "green" },
    { imgElem: new Image(),name: "Shrimp2", path: "./images/foods/Shrimp2.png", color: "green" },
    { imgElem: new Image(),name: "Shrimp3", path: "./images/foods/Shrimp3.png", color: "green" },
    { imgElem: new Image(),name: "Sushi1", path: "./images/foods/Sushi1.png", color: "green" },
    { imgElem: new Image(),name: "Sushi2", path: "./images/foods/Sushi2.png", color: "green" },
    { imgElem: new Image(),name: "Sushi3", path: "./images/foods/Sushi3.png", color: "green" },
    { imgElem: new Image(),name: "Sushi4", path: "./images/foods/Sushi4.png", color: "green" },
    { imgElem: new Image(),name: "Turkey", path: "./images/foods/Turkey.png", color: "green" },
    { imgElem: new Image(),name: "Cheese", path: "./images/foods/Cheese.png", color: "green"},
    { imgElem: new Image(),name: "Taco", path: "./images/foods/Taco.png", color: "green"},
]

function randomImg(color){
    switch(color){
        case "green":
        return randomMemberOfArray(meatAndFish).imgElem  
        case "red":
        return randomMemberOfArray(veggieAndFruit).imgElem  
    }
}

function randomMemberOfArray(arr){
    if(arr == undefined) return undefined
    if(arr.length>1){
        return arr[Math.floor(Math.random()*arr.length)]
    }else{
        return arr[0]
    }
}
