// timer variables
var timerEl = document.querySelector(".time");
var timeDown = 75;

// start button element variable
var startBtn = document.querySelector(".button1");

// other element variables
var headingEl = document.querySelector(".heading");
var questionsEl = document.querySelector(".questions");
var answersEl = document.querySelector(".answers");
var judgeEl = document.querySelector(".judge");


// Array of Questions - the first five questions/answers are taken from the homework demo in the assets folder of the assignment
var questionArray = [
    {
        text: "1. Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {
        text: "2. The condition in an if/else statement is enclosed within ______.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets",],
        answer: "3. parentheses"
    },
    {
        text: "3. Arrays in JavaScript can be used to store ______.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above",],
        answer: "4. all of the above"
    },
    {
        text: "4. String values must be enclosed within ______ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses",],
        answer: "3. quotes"
    },
    {
        text: "5. A very useful too used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log",],
        answer: "4. console.log"
    },
    {
        text: "6. Which model allows for the developer to select and manipulate elements in a page?",
        choices: ["1. ROM", "2. TOM", "3. DOM", "4. MOM",],
        answer:"3. DOM"
    },
    {
        text: "7. if and else are both _______.",
        choices: ["1. conditional statements", "2. booleans", "3. strings", "4. loops",],
        answer: "1. conditional statements"
    },
    {
        text: "8. Inside what location on your HTML file is the best practice for linking a script tag?",
        choices: ["1. top of the html tag", "2. top of the footer tag", "3. bottom of a div tag", "4. bottom of the body tag",],
        answer: "4. bottom of the body tag"
    },

]

// Function to give styles to the questions
function questStyler () {
    questionsEl.style.fontWeight = "bold";
    questionsEl.style.fontSize = "30px";
}

// Function to give styles to the answers
function ansStyler () {
    answersEl.style.textAlign = "left";
    answersEl.style.position = "absolute";
    answersEl.style.marginLeft = "500px";
    answersEl.style.marginTop = "20px";
    
}
// function nextQuestDisplay () {
    // for (var i=0; i < questionArray.length; i++) {
    //    if  

// Function to display the first question when the start button is clicked
startBtn.addEventListener("click", function questionDisplay () {
    headingEl.innerHTML = "";
    questionsEl.innerHTML = "";
    var questArrText = questionArray[0].text;
    var newQuest = questionsEl.innerHTML = questArrText; 
    questStyler()
    
});

// Function to display the first list of answer button when the start button is clicked
startBtn.addEventListener("click", function answerDisplay () {
    var removeStartBtn = startBtn.remove();
    answersEl.innerHTML = "";
    var questArrAns = questionArray[0].choices;
    console.log(questArrAns)
    for (i = 0; i < questArrAns.length; i++) {
    var newAnsBtn = document.createElement("button");
    var spacers = document.createElement("br");
    newAnsBtn.innerHTML = questArrAns[i];
    answersEl.appendChild(newAnsBtn);
    answersEl.appendChild(spacers);
    ansStyler()
    

}
    
});

// Timer Function
timerEl.innerHTML = "Time: " + timeDown;
startBtn.addEventListener("click", function newTimer() {
    // var timeDown = 75;
    var timerInterval = setInterval(function() {
    timeDown--;
    timerEl.innerHTML = "Time: " + timeDown;

    if (timeDown <= 0) {
        clearInterval(timerInterval);
        return;
    }
  }, 1000);
});



