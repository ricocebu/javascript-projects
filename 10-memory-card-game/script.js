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
    
    if (img.dataset.hide === "hidden") {
      img.dataset.hide = "shown";
      img.src = img.dataset.card;
    } else if (img.dataset.hide === "shown") {
      img.dataset.hide = "hidden";
      img.src = faceDownCard;
    }

    console.log(img.src);
    console.log(faceDownCard);
  });

});

