const SUITS = ["♠","♣","♥","♦"]
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
]

export default class Deck {
  constructor(card = freshDeck()){
    this.card = card
  }
  get numberOfCard() {
    return this.card.length
  }

 

  shuffle() {
    for(let i = this.numberOfCard - 1; i > 0; i--){
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldvalue = this.card[newIndex]
      this.card[newIndex] = this.card[i]
      this.card[i] = oldvalue
    }
  }
}
class Card {
  constructor(suit,value){
    this.suit = suit
    this.value = value
  }
  get color(){
    return this.suit === "♥" || this.suit === "♥" ? "black" : "red"
  }
  getHTML(){
    const cardDiv = document.createElement('div')
    cardDiv.innerText = this.suit
    cardDiv.classList.add("card", this.color)
    cardDiv.dataset.value = (this.value) +  (this.suit)
    return cardDiv
  }
}


function freshDeck(){
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit,value)
    })
})
}