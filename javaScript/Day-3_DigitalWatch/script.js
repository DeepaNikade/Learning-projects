let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// time
setInterval(() => {
  let currTime = new Date();
  hrs.innerHTML = (currTime.getHours() < 10 ? "0" : "") + currTime.getHours();
  min.innerHTML =
    (currTime.getMinutes() < 10 ? "0" : "") + currTime.getMinutes();
  sec.innerHTML =
    (currTime.getSeconds() < 10 ? "0" : "") + currTime.getSeconds();
}, 1000);

//stop watch

let [seconds, minutes, hours] = [0, 0, 0];
let displaytime = document.getElementById("displaytime");
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displaytime.innerHTML = `${h}:${m}:${s}`;
}

document.getElementById("start").addEventListener("click", () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timer);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displaytime.innerHTML = "00:00:00";
});
