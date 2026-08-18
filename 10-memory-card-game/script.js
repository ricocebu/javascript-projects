const cardsContainer = document.getElementById('cards');
const cardsArray = [
  'images/clubs_A.png',
  'images/clubs_J.png',
  'images/clubs_Q.png',
  'images/clubs_K.png',
  'images/hearts_A.png',
  'images/hearts_J.png',
  'images/hearts_Q.png',
  'images/hearts_K.png',    
];


cardsArray.forEach(url => {
  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Card images';
  img.style.width = '200px';
  cardsContainer.appendChild(img);
});