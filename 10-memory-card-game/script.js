const cardsContainer = document.getElementById('cards');
const faceDownCard = 'images/back_light.png';
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
const restartGame = document.getElementById('restart');

cardsArray.sort(() => Math.random() - .5);

cardsArray.forEach(url => {
  const img = document.createElement('img');
  img.src = faceDownCard;
  img.dataset.card = url;
  img.dataset.hide = "hidden";
  img.alt = 'Card images';
  img.style.width = '80px';
  cardsContainer.appendChild(img);

  img.addEventListener('click', () => {

    if (selectedCards.length >= 2) {
      return;
    }

    if (img.dataset.hide === 'show') {
      return;
    }

    img.dataset.hide = 'show';
    img.src = img.dataset.card;

    selectedCards.push(img);

    if (selectedCards.length === 2) {

      const firstCard = selectedCards[0];
      const secondCard = selectedCards[1];

      if (firstCard.dataset.card === secondCard.dataset.card) {
        score++;
        document.getElementById('score').innerHTML = "Score: " + score;
        selectedCards.length = 0;

        if (score === 8) {
          alert("You win! Congratulations");
          selectedCards.length = 0;
        }

      } else {
        setTimeout( () => {
          firstCard.dataset.hide = 'hidden';
          firstCard.src = faceDownCard;
          secondCard.dataset.hide = 'hidden';
          secondCard.src = faceDownCard;   
          selectedCards.length = 0;
        }, 1000)    
      }

    }
  });

});

// restartGame.addEventListener('click', () => {
//   cardsContainer.getAttribute(img);
//   img.src = faceDownCard;
//   img.dataset.hide = "hidden";
//   selectedCards.length = 0;
//   score = 0;
//   document.getElementById('score').innerHTML = "Score: ";
  
// });