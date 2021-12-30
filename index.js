let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard 
let cards = [firstCard ,secondCard]
let hasBlackJack = false
let message = ""

let mesg = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el") 
let cardsEl = document.getElementById("cards-el")
function startGame()
{
  renderGame()
}
function renderGame()
{
      sumEl.textContent = "sum : " + sum
      cardsEl.textContent = "Cards :";
      for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
      }
      
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🤞🤦‍♂️"
     } else if (sum === 21) {
         message = "Wohoo! You've got Blackjack! 🎉🙌"
         hasBlackJack = true
     } else {
         message = "You're out of the game! 😥😥"
         isAlive = false
     }
   mesg.textContent = message
}
function newCard()
{
    
    let card = 4
    sum += card
    cards.push(card)
    renderGame()
}

