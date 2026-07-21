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

for (let i = 0; i < imageArray.length; i++) {
  const dot = document.createElement("span")
  dot.innerHTML = "\u2022";
  document.querySelector("#dots").appendChild(dot);
  dot.addEventListener("click", () => {
    currentIndex = i;
    container.src = imageArray[i]
  })
}

const dots = document.querySelector('#dots').classList;
dots.add('dot-style');