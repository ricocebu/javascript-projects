function showAnswer(h3) {
  const answers = h3.nextElementSibling;
  const showAnswer = document.querySelectorAll(".answer");
  const isOpen = answers.classList.contains("show-answer");
  
  for (let i = 0; i < showAnswer.length; i++) {
    showAnswer[i].classList.remove("show-answer");
  }

  if (!isOpen) {
  answers.classList.add("show-answer");
  }
}