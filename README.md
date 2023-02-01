
![cover photo](/images/cover.png)

# Play with Joojoo
> [play with joojoo](https://sw-li.github.io/playwithJoojoo/) is a project inspired by my cat
<br>

> pure JS project

so it works now?

On load of the game page, there are three entries for three differents games
1. a dodging game
2. a memory card - pair the same photos of Joojoo
3. a memory card - find the card with shrimps



<br>

## Game 1
- a simple dodging game controled by mouse to avoid hit(red cubes, veggies and fruits)
- 3 inital blood count, every hit cause one blood lose
- Game over when you lose all 3 bloods. 
- pickup green cubes or non vegan dish for gaining points
- every 10 scores give one blood recovery (3 blood max)
---

*technical challenges resoved in the making:*
- smooth mouse mouvement, the drawn object on canvas block the onmousemove listener, which cause the control lagging. 
- double canvas relative position problems
- images loading for canivore mode, drawImg can't be executed when the images are not yet loaded

<br> 

## Game 2

- flip the cards one by one to pair them up until you find all the pairs. 
- Option to time the game to make it more challenging. 

---
*technical challenges resoved in the making:*
- chronometer synchronization (to be perfected with callback functions)
- card flipping animation


<br>

## Game 3
- you have a few seconds to look at all the cards before they all flip to back 
- you should find all shrimp cards for finish the level. 
- 3 initial blood count, every wrong card cause one blood lose
- Game over when you lose all 3 bloods. 
- based on the scores, Joojoo will allow different level of intamacy. from head petting to hugging. 
---
*technical challenges resoved in the making:*
- card flipping delayed solution for flipping them twice


> Organizational correction and encapsulation on going.
