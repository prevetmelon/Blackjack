
let player = {
    name: "Milana",
    chips: 100
}
let sum = 0
let cards= []
let hasBlackjack = false
let isAlive=false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let newCardEl=document.getElementById("newcard-el")


function getRandomCard(){
   let randomNumber = Math.floor(Math.random()*13) + 1
   if(randomNumber > 10){
       return 10
   }
   else if(randomNumber === 1){
       return 11
   }
   else{
       return randomNumber
   }
}

function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard, secondCard]
    sum= firstCard + secondCard
    renderGame()
}

function renderGame() {
    if(sum <= 20){
    message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackjack=true
    }
    else{
       message = "You're out of the game!"
        isAlive=false
        newCardEl.textContent="OOPS!"
        
    }
    messageEl.textContent = message
    sumEl.textContent="Sum: " + sum
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard(){
    if(isAlive && !hasBlackjack){
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        console.log(cards)
        renderGame()
    }
}