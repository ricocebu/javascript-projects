const timer = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const lapButton = document.getElementById('lap-button');
const lapRecord = document.getElementById('lap-record');

let count = 0;
let interval;

function startTimer() {

  if (interval) return;

  interval = setInterval(() => {
    count++;
    let ms = count % 100;
    let seconds = Math.floor(count / 100) % 60;
    let minutes = Math.floor(count / 6000);
    ms = String(ms).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    timer.innerHTML = minutes + ":" + seconds +":" + ms;
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
  timer.innerHTML = "00:00:00";
  lapRecord.innerHTML = "";
}

function recordLap() {
  let ms = count % 100;
  let seconds = Math.floor(count / 100) % 60;
  let minutes = Math.floor(count / 6000);
  ms = String(ms).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");

  const para = document.createElement("p");
  const node = document.createTextNode(minutes + ":" + seconds +":" + ms);
  para.appendChild(node);
  lapRecord.appendChild(para);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);