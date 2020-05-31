// timer variables
var timerEl = document.querySelector(".time");
var timeDown = 75;

// Element variable
var startBtn = document.querySelector(".button1");
var headingEl = document.querySelector(".heading");
var questionsEl = document.querySelector(".questions");
var answersEl = document.querySelector(".answers");
var judgeEl = document.querySelector(".judge");
// variable to increment questions
var currentQuestion = 0;
selectedButton = null;

myAnswer = null;


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
        text: "8. Inside what location n your HTML file is the best practice for linking a script tag?",
        choices: ["1. top of the html tag", "2. bottom of the body tag", "3. bottom of a div tag", "4. top of the footer tag",],
        answer: 1
    },

]

// Function to give styles to the questions
function questStyler () {
    questionsEl.style.textAlign = "left";
    questionsEl.style.position = "absolute";
    questionsEl.style.marginLeft = "30%";
    questionsEl.style.fontWeight = "bold";
    questionsEl.style.fontSize = "30px";
}

// Function to give styles to the answers
function ansStyler () {
    answersEl.style.textAlign = "left";
    answersEl.style.position = "absolute";
    answersEl.style.marginLeft = "30%";
    answersEl.style.marginTop = "40px";
    
}

// Function to display the first question when the start button is clicked
startBtn.addEventListener("click", function questionDisplay () {
    // remove content from the h1 tag with heading class
    headingEl.innerHTML = "";
    // removes content from the p tag with questions class
    questionsEl.innerHTML = "";
    // grabs the first question from the array of Q&A objects
    var questArrText = questionArray[0].text;
    // inserts that question into the questions element
    var newQuest = questionsEl.innerHTML = questArrText; 
    questStyler()
    
});

// Function to display the first set of answer choices in buttons when the start button is clicked
startBtn.addEventListener("click", function answerDisplay () {
    // removes the start button
    var removeStartBtn = startBtn.remove();
    
    goNextQuestion()
        // newAnsBtn.addEventListener("click", answerClick) 
    } 
);

function goNextQuestion() {
    var questArrAns = questionArray[currentQuestion].choices; 
    for (i = 0; i < questArrAns.length; i++) {
        var newAnsBtn = document.createElement("button");
            if (i == questionArray[currentQuestion].answer) {
                newAnsBtn.setAttribute("data", "data-answer"); 
            } 
        var spacers = document.createElement("br");
        newAnsBtn.innerHTML = questArrAns[i];
        answersEl.appendChild(newAnsBtn);
        answersEl.appendChild(spacers);
        ansStyler();
    }
};


function answerClick(event) {
    var selectedButton = event.target;
    SelectedButton.addEventListener("click",function ansCheck() {
    for (i = 1; i < questionArray.length; i++) {
        if (selectedButton.hasAttribute("data")) {
            judgeEl.innerHTML = "Correct!";
            judgeEl.style.borderTop = "thin solid gray";
            // goNextQuestion;
        } else {
            timeDown - 10;
            judgeEl.innerHTML = "Wrong!";
            judgeEl.style.borderTop = "thin solid gray";
            // goNextQuestion;
        }
}
    })};



// Function to check if the answer is correct and display judgement, go to next question
// function ansJudge() {
//     var 
// }





