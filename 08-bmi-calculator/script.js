let height = document.getElementById('height');
let weight = document.getElementById('weight');
const calculate = document.getElementById('calculate');
const reset = document.getElementById('reset');
const result = document.getElementById('result');

height.addEventListener('input', () => {
  height = event.target.value;
})

weight.addEventListener('input', () => {
  weight = event.target.value;
})

calculate.addEventListener('click', () => {
  console.log(height + weight);
})

