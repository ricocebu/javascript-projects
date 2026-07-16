function buttonToggle() {
  const content = document.querySelector('.myModal');
  const closeButton = document.querySelector('#closeButton');
  const hideButton = document.querySelector('.clickButton');

  if (window.getComputedStyle(content).display === "none") {
    content.style.display = "flex";
    hideButton.style.display = "none";
  } else {
    content.style.display = "none";
    hideButton.style.display = "flex";
  }
  
}

const overlay = document.querySelector('.myModal');

overlay.addEventListener('click', function(event) {
  if (event.target === overlay) {
    buttonToggle();
  }
});
