let height = document.getElementById('height');
let weight = document.getElementById('weight');
const calculate = document.getElementById('calculate');
const reset = document.getElementById('reset');
let result = document.getElementById('result');
let category = document.getElementById('category');

height.addEventListener('input', () => {
  height = event.target.value;
})

weight.addEventListener('input', () => {
  weight = event.target.value;
})

calculate.addEventListener('click', () => {
  height /= 100;
  let bmiResult = weight / (height * height);
  let n = bmiResult.toFixed(1);
  result.textContent = 'Result: ' + n + " kg/m\u00B2";

  if (bmiResult >= 30) {
    category.textContent = 'Category: Obese';
  } else if (bmiResult >= 25 && bmiResult <= 29.9) {
    category.textContent = 'Category: Overweight';
  } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
    category.textContent = 'Category: Normal';
  } else if (bmiResult < 18.5) {
    category.textContent = 'Category: Underweight';
  }

})

reset.addEventListener('click', () => {
  result.textContent = 'Result: ';
  category.textContent = 'Category: ';
});