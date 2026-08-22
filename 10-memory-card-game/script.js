const cardsContainer = document.getElementById('cards');
const faceDownCard = 'images/back_light.png';
const scoreDisplay = document.getElementById('score');
const restartGame = document.getElementById('restart');

const cardsArray = [
  'images/clubs_A.png',
  'images/clubs_J.png',
  'images/clubs_Q.png',
  'images/clubs_K.png',
  'images/hearts_A.png',
  'images/hearts_J.png',
  'images/hearts_Q.png',
  'images/hearts_K.png',

  'images/clubs_A.png',
  'images/clubs_J.png',
  'images/clubs_Q.png',
  'images/clubs_K.png',
  'images/hearts_A.png',
  'images/hearts_J.png',
  'images/hearts_Q.png',
  'images/hearts_K.png'
];

const selectedCards = [];
let score = 0;
let checkingCards = false;


function shuffleCards() {
  cardsArray.sort(() => Math.random() - 0.5);
}


function createCards() {
  cardsContainer.innerHTML = '';

  cardsArray.forEach(url => {

    const img = document.createElement('img');

    img.src = faceDownCard;
    img.dataset.card = url;
    img.dataset.hide = 'hidden';
    img.alt = 'Card image';
    img.style.width = '80px';

    cardsContainer.appendChild(img);

    img.addEventListener('click', () => {

      // Don't allow clicks while checking two cards
      if (checkingCards) {
        return;
      }

      // Don't allow more than two selected cards
      if (selectedCards.length >= 2) {
        return;
      }

      // Don't allow clicking an already revealed card
      if (img.dataset.hide === 'show') {
        return;
      }

      // Show card
      img.dataset.hide = 'show';
      img.src = img.dataset.card;

      // Store the actual image element
      selectedCards.push(img);


      // Wait until two cards have been selected
      if (selectedCards.length === 2) {

        const firstCard = selectedCards[0];
        const secondCard = selectedCards[1];

        checkingCards = true;


        // MATCH
        if (firstCard.dataset.card === secondCard.dataset.card) {

          score++;

          scoreDisplay.innerHTML = 'Score: ' + score;

          selectedCards.length = 0;

          checkingCards = false;


          // WIN
          if (score === 8) {
            setTimeout(() => {
              alert('You win! Congratulations');
            }, 300);
          }

        }

        // NOT MATCH
        else {

          setTimeout(() => {

            firstCard.dataset.hide = 'hidden';
            firstCard.src = faceDownCard;

            secondCard.dataset.hide = 'hidden';
            secondCard.src = faceDownCard;

            selectedCards.length = 0;

            checkingCards = false;

          }, 1000);

        }
      }
    });
  });
}


// START GAME
shuffleCards();
createCards();


// RESTART GAME
restartGame.addEventListener('click', () => {

  score = 0;

  selectedCards.length = 0;

  checkingCards = false;

  scoreDisplay.innerHTML = 'Score: 0';

  shuffleCards();

  createCards();

});