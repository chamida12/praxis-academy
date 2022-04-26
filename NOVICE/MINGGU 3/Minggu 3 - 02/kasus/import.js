import Deck from "./latihan.js"

const computerCardSlod = document.querySelector('.computer-card-slot')

const deck = new Deck()
deck.shuffle()

computerCardSlod.appendChild(deck.cards[0].getHTML())
