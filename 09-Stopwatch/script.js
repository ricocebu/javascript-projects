const timer = document.getElementById('timer');
// const startButton = document.getElementById('start-button');
// const stopButton = document.getElementById('stop-button');
// const resetbutton = document.getElementById('reset-button');
// const lapButton = document.getElementById('lap-button');
// const lapRecord = document.getElementById('lap-record');

let count = 0;
let interval;

function startTimer() {
  interval = setInterval(() => {
    count++;
    let ms = count % 100;
    let seconds = Math.floor(count / 100) % 60;
    let minutes = Math.floor(count / 6000);
    timer.innerHTML = minutes + ":" + seconds +":" + ms;
  }, 10);
}

function stopTimer() {
  clearInterval(interval);
}