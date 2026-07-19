const imageArray = [
  "images/sung-jin-woo.jpg",
  "images/igris.jpg",
  "images/tusk.jpg",
  "images/cha-hae-in.jpg"
];

const container = document.querySelector('#image-container');

for (let i = 0; i < imageArray.length; i++){
  const img = document.createElement('img');
  img.src = imageArray[i];
  container.appendChild(img);
}