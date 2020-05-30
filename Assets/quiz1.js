// timer variables
var timerEl = document.querySelector(".time");
var timeDown = 75;

// start button element variable
var startBtn = document.querySelector(".button1");



// Timer Function
timerEl.innerHTML = "Time: " + timeDown;
startBtn.addEventListener("click", function newTimer() {
    var timeDown = 75;
    var timerInterval = setInterval(function() {
    timeDown--;
    timerEl.innerHTML = "Time: " + timeDown;

    if (timeDown <= 0) {
        clearInterval(timerInterval);
        return;
    }
  }, 1000);
});

