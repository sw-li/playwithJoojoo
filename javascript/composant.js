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
        this.w = 15
        this.h = 15
        this.bufferSize = 1
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
    { name: "Apple", img: "Apple.png", color: "red"},
    { name: "Banana", img: "Banana.png", color: "red"},
    { name: "Beet", img: "Beet.png", color: "red"},
    { name: "Berries", img: "Berries.png", color: "red"},
    { name: "Carrote", img: "Carrote.png", color: "red"},
    { name: "Cherry", img: "Cherry.png", color: "red"},
    { name: "Grapes", img: "Grapes.png", color: "red"},
    { name: "Lemon", img: "Lemon.png", color: "red"},
    { name: "Mushrooms1", img: "Mushrooms1.png", color: "red"},
    { name: "Mushrooms2", img: "Mushrooms2.png", color: "red"},
    { name: "Mushrooms3", img: "Mushrooms3.png", color: "red"},
    { name: "Orange", img: "Orange.png", color: "red"},
    { name: "PinePotatos", img: "PinePotatos.png", color: "red"},
    { name: "Potatos", img: "Potatos.png", color: "red"},
    { name: "Radish", img: "Radish.png", color: "red"},
    { name: "Strawberry", img: "Strawberry.png", color: "red"},
    { name: "Watermelon", img: "Watermelon.png", color: "red"},
]

const meatAndFish =[
    { name: "Bacon", img: "Bacon.png", color: "green" },
    { name: "Bacon_dish", img: "Bacon_dish.png", color: "green" },
    { name: "Burger", img: "Burger.png", color: "green" },
    { name: "Burger_1", img: "Burger_1.png", color: "green" },
    { name: "Drumstick", img: "Drumstick.png", color: "green" },
    { name: "Cheese", img: "Cheese.png", color: "green" },
    { name: "Dumplings", img: "Dumplings.png", color: "green" },
    { name: "Egg", img: "Egg.png", color: "green" },
    { name: "Egg2", img: "Egg2.png", color: "green" },
    { name: "Hotdog", img: "Hotdog.png", color: "green" },
    { name: "Meatball", img: "Meatball.png", color: "green" },
    { name: "Pizza", img: "Pizza.png", color: "green" },
    { name: "Pizza 2", img: "Pizza 2.png", color: "green" },
    { name: "Roti1", img: "Roti1.png", color: "green" },
    { name: "Roti2", img: "Roti2.png", color: "green" },
    { name: "Sausage", img: "Sausage.png", color: "green" },
    { name: "Steak", img: "Steak.png", color: "green" },
    { name: "Steak1", img: "Steak1.png", color: "green" },
    { name: "Steak_dish", img: "Steak_dish.png", color: "green" },
    { name: "Shrimp1", img: "Shirmp1.png", color: "green" },
    { name: "Shrimp2", img: "Shirmp2.png", color: "green" },
    { name: "Shrimp3", img: "Shirmp3.png", color: "green" },
    { name: "Sushi1", img: "Sushi1.png", color: "green" },
    { name: "Sushi2", img: "Sushi2.png", color: "green" },
    { name: "Sushi3", img: "Sushi3.png", color: "green" },
    { name: "Sushi4", img: "Sushi4.png", color: "green" },
    { name: "Turkey", img: "Turkey.png", color: "green" },
    { name: "Cheese", img: "Cheese.png", color: "green"},
    { name: "Taco", img: "Taco.png", color: "green"},
]

function randomImg(color){
    const img = new Image()
    let imgName = ""
    switch(color){
        case "green":
        imgName = randomMemberOfArray(meatAndFish).name
        case "red":
        imgName = randomMemberOfArray(veggieAndFruit).name
    }
    img.src = "./images/foods/"+imgName +".png"
    return img
}

function randomMemberOfArray(arr){
    if(arr == undefined) return undefined
    if(arr.length>1){
        return arr[Math.floor(Math.random()*arr.length)]
    }else{
        return arr[0]
    }
}
