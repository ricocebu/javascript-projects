const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const number = document.getElementById('number');

let count = 0;

increment.addEventListener('click', () => {
  count++;
  number.innerHTML = count;
})

decrement.addEventListener('click', () => {
  if (count <= 0) {
    return;
  }
  count--;
  number.innerHTML = count;
})

reset.addEventListener('click', () => {
  count = 0;
  number.innerHTML = 0;
})