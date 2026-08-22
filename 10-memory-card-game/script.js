// Calls the html elements and the image.
const cardsContainer = document.getElementById('cards');
const faceDownCard = 'images/back_light.png';
const scoreDisplay = document.getElementById('score');
const restartGame = document.getElementById('restart');

// Created a arrays of images 8 duplicate images.
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

// the selected cards array and the score is empty by default. And the checking cards variable is false by default.
const selectedCards = [];
let score = 0;
let checkingCards = false;

// This function shuffle the cards array to random when called.
function shuffleCards() {
  cardsArray.sort(() => Math.random() - 0.5);
}


// This function creates card if called. First it calls the card container and add blank value.
// Second it creates a foreach loop for the cards array. Inside the foreach loop, it creates a img element.
// Set the img source to facedown as default, create a card dateset to url when called it will show the actual card.
// Also the img data set is hide default, and alt image for all cards are "card image", with a 80px width style.
// And the insert all created img element using append child.
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

    // Event listener for the image once clicked.
    img.addEventListener('click', () => {

      // If the checking cards is true clicking other cards will not be possible.
      if (checkingCards) {
        return;
      }

      // If more than 2 cards are selected this will prevent the clicking of another card.
      if (selectedCards.length >= 2) {
        return;
      }

      // If the selected card is already clicked. this will prevent the clicking of the same card.
      if (img.dataset.hide === 'show') {
        return;
      }

      // The value of the card will be show and the card selected will be shown.
      img.dataset.hide = 'show';
      img.src = img.dataset.card;

      // The selected cards will be stored on the selected cards array.
      selectedCards.push(img);


      // If 2 cards is selected it will be stored on the firstcard and the second card variable. And the checking card will be true.
      if (selectedCards.length === 2) {

        const firstCard = selectedCards[0];
        const secondCard = selectedCards[1];

        checkingCards = true;


        // If first card and second card is match the score will add 1 and will be shown in the score board.
        // The selected cards and checking cards will be back to 0 and false like the default set.
        if (firstCard.dataset.card === secondCard.dataset.card) {

          score++;

          scoreDisplay.innerHTML = 'Score: ' + score;

          selectedCards.length = 0;

          checkingCards = false;


          // If score is equals to 8, there will be a congratulations alert after 300ms.
          if (score === 8) {
            setTimeout(() => {
              alert('You win! Congratulations');
            }, 300);
          }

        }

        // If not matched. The value of first and second card will be hidden and will be back to facedowncard.
        // the selected cards will be back to 0, and the checking cards will be back to false. all of this will run after 500ms.
        else {

          setTimeout(() => {

            firstCard.dataset.hide = 'hidden';
            firstCard.src = faceDownCard;

            secondCard.dataset.hide = 'hidden';
            secondCard.src = faceDownCard;

            selectedCards.length = 0;

            checkingCards = false;

          }, 500);

        }
      }
    });
  });
}


// This will shuffle the cards, create cards. like the game started
shuffleCards();
createCards();


// If restart game button is clicked the score will be back to 0, the selectedcards array will be 0, the checking cards will be back to false.
// the scoreboard will be 0, it will create another cards and shuffle again.
restartGame.addEventListener('click', () => {

  score = 0;

  selectedCards.length = 0;

  checkingCards = false;

  scoreDisplay.innerHTML = 'Score: 0';

  shuffleCards();

  createCards();

});