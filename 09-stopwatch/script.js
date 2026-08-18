const timer = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const lapButton = document.getElementById('lap-button');
const lapRecord = document.getElementById('lap-record');

let count = 0;
let interval;
let number = 0;

function startTimer() {

  if (interval) return;

  interval = setInterval(() => {
    count++;
    timer.innerHTML = timerVar();
  }, 10);

}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  count = 0;
  number = 0;
  timer.innerHTML = "00 : 00 : 00";
  lapRecord.innerHTML = "";
}

function recordLap() {

  number++;

  const para = document.createElement("p");
  const node = document.createTextNode("#" + number + " \u2014 " + timerVar());
  para.appendChild(node);
  lapRecord.appendChild(para);

}

function timerVar() {
  let ms = String(count % 100).padStart(2, "0");
  let seconds = String(Math.floor(count / 100) % 60).padStart(2, "0");
  let minutes = String(Math.floor(count / 6000)).padStart(2, "0");
  return minutes + " : " + seconds +" : " + ms;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);