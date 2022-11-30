
 class Composant {
    constructor(img,x,y,xSpeed,ySpeed,speedFacter,size,isEnemie){
        this.img = img
        this.x = x
        this.y = y
        this.xSpeed = xSpeed
        this.ySpeed = ySpeed
        this.speedFacter = speedFacter
        this.size = size
        this.isEnemie = isEnemie
        // use the canvas contexte as a property for later use
    }
    newPos(){
      this.x +=this.xSpeed*this.speedFacter
      this.y +=this.ySpeed*this.speedFacter
    }
    update(){
      let ctx = document.querySelector("#game1 .gameArea.canvasGame").getContext("2d")
      ctx.fillRect(this.x, this.y,25,25)
    }
  }

