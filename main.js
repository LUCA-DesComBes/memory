const cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedCards = [];
//on boucle dans une function pour ecouter le click
cards.forEach(card => {
  card.addEventListener('click', flipCard);
});
//fonction pour faire le retournement de cartes
function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains('flipped') && !matchedCards.includes(this)) {
    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }
}
//fonction pour pour voir si toutes les cartes sont retouner
function checkMatch() {
  const [card1, card2] = flippedCards;
  const number1 = card1.dataset.number;
  const number2 = card2.dataset.number;

  if (number1 === number2) {
    matchedCards.push(card1, card2);
    flippedCards = [];

    if (matchedCards.length === cards.length) {
      setTimeout(() => {
        alert('Felicitations ! Vous avez trouver toutes les paires.');
      }, 500);
    }
  } else {
    flippedCards.forEach(cardess => {
      cardess.classList.remove('flipped');
    });
    flippedCards = [];
  }
}
// Mélange des cartes avec une boucle while mais ca marche pas
(function shuffleCard() {
  cards.forEach(card => {
    let random = Math.floor(Math.random() * 16);
    card.style.order = random;
  });
}());



