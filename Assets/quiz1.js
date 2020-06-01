// timer variables
var timerEl = document.querySelector(".time");
var timeDown = 75;

// Element variable
var startBtn = document.querySelector(".button1");
var headingEl = document.querySelector(".heading");
var questionsEl = document.querySelector(".questions");
var answersEl = document.querySelector(".answers");
var judgeEl = document.querySelector(".judge");
// var choiceBtn = document.querySelector("button")
// variable to increment questions
var currentQuestion = 0;
selectedButton = null;

myAnswer = null;

// Timer Function
timerEl.innerHTML = "Time: " + timeDown;
startBtn.addEventListener("click", function newTimer() {
    var timerInterval = setInterval(function() {
    timeDown--;
    timerEl.innerHTML = "Time: " + timeDown;
    
    if (timeDown <= 0) {
        clearInterval(timerInterval);
        timeDown = 0;
        timerEl.innerHTML = "Time: " + timeDown
    }
  }, 1000);
 
});

// Array of Questions - the first five questions/answers are taken from the homework demo in the assets folder of the assignment
var questionArray = [
    {
        text: "1. Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: 2
    },
    {
        text: "2. The condition in an if/else statement is enclosed within ______.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets",],
        answer: 2
    },
    {
        text: "3. Arrays in JavaScript can be used to store ______.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above",],
        answer: 3
    },
    {
        text: "4. String values must be enclosed within ______ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses",],
        answer: 2
    },
    {
        text: "5. A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log",],
        answer: 3
    },
    {
        text: "6. Which model allows for the developer to select and manipulate elements in a page?",
        choices: ["1. ROM", "2. TOM", "3. DOM", "4. MOM",],
        answer: 2
    },
    {
        text: "7. if and else are both _______.",
        choices: ["1. conditional statements", "2. booleans", "3. strings", "4. loops",],
        answer: 0
    },
    {
        text: "8. Inside what location in your HTML file is the best practice for linking a script tag?",
        choices: ["1. top of the html tag", "2. bottom of the body tag", "3. bottom of a div tag", "4. top of the footer tag",],
        answer: 1
    },
]
// Function to give styles to the questions
function questStyler () {
    questionsEl.style.textAlign = "left";
    questionsEl.style.position = "relative";
    questionsEl.style.marginLeft = "30%";
    questionsEl.style.fontWeight = "bold";
    questionsEl.style.fontSize = "30px";
}
// Function to give styles to the answers
function ansStyler () {
    answersEl.style.textAlign = "left";
    answersEl.style.position = "absolute";
    answersEl.style.marginLeft = "30%";
    answersEl.style.marginTop = "15px";
    
}
// Function to display the first set of answer choices in buttons when the start button is clicked
startBtn.addEventListener("click", function answerDisplay () {
    // calls function to go to the next question
    goNextQuestion()
    } 
);
function goNextQuestion() {
    headingEl.innerHTML = "";
    // removes content from the p tag with questions class
    questionsEl.innerHTML = "";
    var removeBtns = document.querySelectorAll("button");
    for (i = 0; i < removeBtns.length; i++) {
        removeBtns[i].remove();
    }
    // var questArrTexts = questionArray[i];
    if (currentQuestion >= questionArray.length) {
            return;
        }
    // grabs the first question from the array of Q&A objects
    var questArrText = questionArray[currentQuestion].text;
    // inserts that question into the questions element
    var newQuest = questionsEl.innerHTML = questArrText; 
    // styles the question
    questStyler();
    // variable for the first array of answer choices
    var questArrAns = questionArray[currentQuestion].choices; 
    // loops through answer choice array
    for (i = 0; i < questArrAns.length; i++) {
        if (i >= questArrAns.length) {
            return;
        } else {
        // and creates a button for each answer choice in the array
        var newAnsBtn = document.createElement("button");
            // checks if the index matches the integer value for the answer in the questions array
            if (i == questionArray[currentQuestion].answer) {
                // sets a data attribute
                newAnsBtn.setAttribute("data", "data-answer"); 
            }
        newAnsBtn.innerHTML = questArrAns[i];
        answersEl.appendChild(newAnsBtn);
        newAnsBtn.style.display = "block";
        ansStyler();
        newAnsBtn.addEventListener("click", answerClick);
    }
}};
function answerClick(event) {
    // grab the one that was clicked
    var selectedButton = event.target;
    currentQuestion++;
    if (selectedButton.hasAttribute("data")) {
            judgeEl.innerHTML = "Correct!";
            goNextQuestion();
        } else {
             timeDown -= 10;
            judgeEl.innerHTML = "Wrong!";
            
            goNextQuestion();
        }
    };







