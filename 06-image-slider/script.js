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

const dot1 = document.createElement("span");
dot1.innerHTML = "\u2022";
document.querySelector("#dots").appendChild(dot1);

const dot2 = document.createElement("span");
dot2.innerHTML = "\u2022";
document.querySelector("#dots").appendChild(dot2);

const dot3 = document.createElement("span");
dot3.innerHTML = "\u2022";
document.querySelector("#dots").appendChild(dot3);

const dot4 = document.createElement("span");
dot4.innerHTML = "\u2022";
document.querySelector("#dots").appendChild(dot4);

const dots = document.querySelector('#dots').classList;
dots.add('dot-style');

if (dot1) {
  document.querySelector('#dots').addEventListener("click", () => {
    container.src = imageArray[0];
  })
} else if (dot2) {
  document.querySelector('#dots').addEventListener("click", () => {
    container.src = imageArray[1];
  })
} else if (dot3) {
  document.querySelector('#dots').addEventListener("click", () => {
    container.src = imageArray[2];
  })
} else if (dot4) {
  document.querySelector('#dots').addEventListener("click", () => {
    container.src = imageArray[3];
  })
}