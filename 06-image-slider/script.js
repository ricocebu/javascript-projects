const imageArray = [
  "images/sung-jin-woo.jpg",
  "images/igris.jpg",
  "images/tusk.jpg",
  "images/cha-hae-in.jpg"
];

const container = document.querySelector('#image-container');
let currentIndex = 0;
document.querySelector('#image-container').src = imageArray[currentIndex]

document.querySelector('.next').addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageArray.length;
  container.src = imageArray[currentIndex];
})

document.querySelector('.previous').addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
  container.src = imageArray[currentIndex];
})