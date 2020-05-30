// timer variables
var timerEl = document.querySelector(".time");
var timeDown = 5;

// Timer Function
function newTimer() {
  var timerInterval = setInterval(function() {
    timeDown--;
    timerEl.innerHTML = "Time: " + timeDown;

    if (timeDown <= 0) {
        clearInterval(timerInterval);
        return;
    }
  }, 1000);
  
}
newTimer()