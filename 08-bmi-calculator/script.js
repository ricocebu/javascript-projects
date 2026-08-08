let height = document.getElementById('height');
let weight = document.getElementById('weight');
const calculate = document.getElementById('calculate');
const reset = document.getElementById('reset');
let result = document.getElementById('result');

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
  result.textContent += n + " kg/m\u00B2";
})

reset.addEventListener('click', () => {
  result.textContent = 'Result: ';
});


