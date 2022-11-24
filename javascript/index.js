const gameDivs = [...document.getElementsByClassName("gameDiv")]






window.onload = (e) => {
    gameDivs.map(game => game.style.display = "none")
}


//HTML page ttransition
document.onclick = (e) => {
    if(e.target.classList.contains("toAli")) {
            document.getElementById("entries").style.display = "none"
            document.getElementById("gameAli").style.display = "flex"
        }
    if(e.target.classList.contains("toShengwei")) {
            document.getElementById("entries").style.display = "none"
            document.getElementById("gameShengwei").style.display = "flex"
            loadGame2()
        }
    if(e.target.classList.contains("toJoojoo")) {
            document.getElementById("entries").style.display = "none"
            document.getElementById("gameJoojoo").style.display = "flex"
        }
    if(e.target.id == "backBtn"){
        document.getElementById("entries").style.display= "flex"
        gameDivs.map(game => game.style.display = "none")
    }
}

