const timer = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetbutton = document.getElementById('reset-button');
const lapButton = document.getElementById('lap-button');
const lapRecord = document.getElementById('lap-record');

let count = 0;
let interval;

// startButton.addEventListener('click', () => {
//   start();
// })

function start() {
  interval = setInterval(() => {
    count++;
    timer.innerHTML = count + 1;
  }, 10);
}