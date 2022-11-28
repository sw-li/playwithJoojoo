/** @type {HTMLCanvasElement} */
const can = document.querySelector("canvas")
const ctx = can.getContext("2d")
console.log(ctx)
function draw(x,y){
	//repeat the action infinitly. 
    if(x>450) {x=0,y=0}
    ctx.clearRect(0,0,500,500)
    ctx.fillStyle = 'gree'
    ctx.fillRect(x,y,50,50)
    x++
    y++
    setTimeout(draw,10,x,y)
}

draw()