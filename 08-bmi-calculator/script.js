const calculate = document.getElementById('calculate');
const reset = document.getElementById('reset');
const result = document.getElementById('result');
const category = document.getElementById('category');

calculate.addEventListener('click', () => {
  const height = Number(document.getElementById('height').value) / 100;
  const weight = Number(document.getElementById('weight').value);
  let bmiResult = weight / (height * height);
  let n = bmiResult.toFixed(1);

  if (height && weight) {
    result.textContent = 'Result: ' + n + " kg/m\u00B2";
  } else {
    alert('Error: Please enter a valid height and weight.');
    return;
  }

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
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  result.textContent = 'Result: ';
  category.textContent = 'Category: ';
});