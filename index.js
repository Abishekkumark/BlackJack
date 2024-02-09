let player = {
    name: "Per",
    chips: 200
}


let hasBlackJack = false
let isAlive = false
let message = ""
let cards = []
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl= document.querySelector(".sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.getElementById("player-el")
let betEl = document.getElementById("bet-el")


playerEl.textContent = player.name + ": $" + player.chips

function RandomNumber(){

    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }

}

function startGame(){
    isAlive = true
    let firstCard = RandomNumber()
    let secondCard = RandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards : "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum : " + sum

if (sum < 21 ){
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}
messageEl.textContent = message

const card = document.querySelector(".relate");
const rotationAngle = 360;
const duration = 10;
const numberOfSpins = 5;
const totalDuration = duration * numberOfSpins;
card.style.transition = `transform ${totalDuration / 1000}s ease`;
card.style.transform = `rotateY(${rotationAngle * numberOfSpins}deg)`;

setTimeout(() => {
  card.style.transition = 'transform 0.5s ease';
  card.style.transform = 'none';
}, totalDuration);

}

function newGame() {
    let card = RandomNumber()
    sum += card
    cards.push(card)
    renderGame()
}