const imageArray = [
  "images/sung-jin-woo.jpg",
  "images/igris.jpg",
  "images/tusk.jpg",
  "images/cha-hae-in.jpg"
];


const container = document.querySelector('#image-container');
const dots = document.querySelector('#dots').classList;
let currentIndex = 0;
document.querySelector('#image-container').src = imageArray[currentIndex]
let autoPlayInterval = setInterval(autoPlay, 3000);


document.querySelector('.next').addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageArray.length;
  container.src = imageArray[currentIndex];
  updateDots();
})
document.querySelector('.previous').addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
  container.src = imageArray[currentIndex];
  updateDots();
})

for (let i = 0; i < imageArray.length; i++) {
  const dot = document.createElement("span")
  dot.innerHTML = "\u2022";
  document.querySelector("#dots").appendChild(dot);
  dot.classList.add('dot-style');
  dot.addEventListener("click", () => {
    currentIndex = i;
    container.src = imageArray[i]
    updateDots();
  })
}

updateDots();

function updateDots() {
  const getDots = document.querySelectorAll('span');

  for (let i = 0; i < getDots.length; i++) {
    getDots[i].classList.remove('dot-style-active');
    if (i === currentIndex) {
      getDots[i].classList.add('dot-style-active');
    }
  }
}

function autoPlay() {
  currentIndex = (currentIndex + 1) % imageArray.length;
  container.src = imageArray[currentIndex];
  updateDots();
}

container.addEventListener('mouseenter', () => {
  clearInterval(autoPlayInterval);
})

container.addEventListener('mouseleave', () => {
  autoPlayInterval = setInterval(autoPlay, 3000);
})