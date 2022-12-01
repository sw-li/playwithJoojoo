class Composant{
  constructor(x,y,color,speedFactor=1){
      this.x = x
      this.y = y
      this.color = color
      this.w = 20
      this.h = 20
      this.bufferSize = 2
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
      if(this.bottom() < composant.top() || this.top()>composant.bottom() || this.right()<composant.left() ||this.left()>composant.right()) {
          return false
      }else{
          console.log("colide")
          return true
      }
  }
}

function positifOrNegatif(){
  let index = Math.random()
  if(index>0.5) return 1
  return -1
}

