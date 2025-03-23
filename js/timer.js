document.addEventListener("DOMContentLoaded", function () {
  let hours = 23;
  let minutes = 59;
  let seconds = 59;
  let timesSales = document.getElementById("time");
  let timesSalesFinalResult = document.querySelector(".sales");
  let timer = setInterval(function () {
    timesSales.innerHTML = `${hours}:${minutes}:${seconds}`;
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(timer);
      timesSalesFinalResult.innerHTML = `Finished timer!`;
    } else if (minutes < 10) {
      timesSales.innerHTML = `${hours}:0${minutes}:${seconds}`;
    } else if (seconds < 10) {
      timesSales.innerHTML = `${hours}:${minutes}:0${seconds}`;
    }

    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;
    } else if (minutes < 0) {
      minutes = 59;
      hours--;
    }
  }, 1000);
});
