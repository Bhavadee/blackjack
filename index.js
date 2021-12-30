let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let message = ""

let mesg = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el") 

function startGame()
{
      sumEl.textContent += sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
     } else if (sum === 21) {
         message = "Wohoo! You've got Blackjack! "
         hasBlackJack = true
     } else {
         message = "You're out of the game! "
         isAlive = false
     }
   mesg.textContent = message
}

