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

cardsArray.sort(() => Math.random() - .5);

cardsArray.forEach(url => {
  const img = document.createElement('img');
  img.src = faceDownCard;
  img.dataset.card = url;
  img.dataset.hide = "hidden";
  img.alt = 'Card images';
  img.style.width = '100px';
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
        console.log("MATCH!");
      } else {
        console.log ("NOT MATCH!");

        firstCard.dataset.hide = 'hidden';
        firstCard.src = faceDownCard;

        secondCard.dataset.hide = 'hidden';
        secondCard.src = faceDownCard;        
      }

      selectedCards.length = 0;

    }

    // selectedCards.push(img.dataset.card);
    
    // if (img.dataset.hide === "hidden" && selectedCards.length <= 2) {
    //   img.dataset.hide = "shown";
    //   img.src = img.dataset.card;

    //   if (selectedCards.length === 2) {

    //     img.dataset.hide = "shown";
    //     img.src = img.dataset.card;

    //     if (selectedCards[0] === selectedCards[1]) {
    //       img.dataset.hide = "shown";
    //       img.src = img.dataset.card;
    //     } else {
    //       img.dataset.hide = "hidden";
    //       img.src = faceDownCard;
    //     }
    //   } 

    // } else if (img.dataset.hide === "shown") {
    //   img.dataset.hide = "hidden";
    //   img.src = faceDownCard;
    // }
    // console.log(selectedCards);

  });

});