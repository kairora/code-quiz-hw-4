var timerEl = document.querySelector(".time");


var timeDown = 75;

function newTimer() {
  var timerInterval = setInterval(function() {
    timeDown--;
    timerEl.innerHTML = "Time: " + timeDown;

  }, 1000);
  
}
newTimer()