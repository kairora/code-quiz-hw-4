// timer variables
var timerEl = document.querySelector(".time");
var timeDown = 75;
// Element variables
var startBtn = document.querySelector(".button1");
var headingEl = document.querySelector(".heading");
var questionsEl = document.querySelector(".questions");
var answersEl = document.querySelector(".answers");
var judgeEl = document.querySelector(".judge");
var mainEl = document.querySelector(".main");
var breakEl = document.querySelector("br");
var clearBtn = document.querySelector(".clearscores");
// var scoredList = document.querySelector("#scorelist");
// variable for incrementing questions and counting right/wrong answers
var wrongNumbers = 0;
var rightNumbers = 0;
var currentQuestion = 0;
selectedButton = null;
myAnswer = null;

// Timer Function
if(timerEl != undefined) {timerEl.innerHTML = "Time: " + timeDown;
var timerInterval = setInterval(function() {
    timerEl.innerHTML = "Time: " + timeDown;
    // timeDown--;
    if (currentQuestion >= questionArray.length) {
        clearInterval(timerInterval);
        timerEl.innerHTML = "Time: " + timeDown
    } else if (timeDown <= 0) {
        clearInterval(timerInterval);
        timeDown = 0;
        timerEl.innerHTML = "Time: 0"
    }
  }, 1000);
}
if (startBtn != undefined) {startBtn.addEventListener("click", function newTimer() {
    var timerInterval = setInterval(function() {
        timeDown--;
    timerEl.innerHTML = "Time: " + timeDown;
    
    if (currentQuestion >= questionArray.length) {
        clearInterval(timerInterval);
        timerEl.innerHTML = "Time: " + timeDown
    } else if (timeDown <= 0) {
        clearInterval(timerInterval);
        timeDown = 0;
        timerEl.innerHTML = "Time: 0"
    }
  }, 1000);
});
}
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
    questionsEl.style.marginLeft = "auto";
    questionsEl.style.marginRight = "auto";
    questionsEl.style.fontWeight = "bold";
    questionsEl.style.fontSize = "30px";
}
// Function to give styles to the answers
function ansStyler () {
    answersEl.style.textAlign = "left";
    answersEl.style.position = "relative";
    answersEl.style.marginLeft = "auto";
    answersEl.style.marginRight = "auto";
    answersEl.style.marginTop = "15px";
}
// Function to display the first set of answer choices in buttons when the start button is clicked
if (startBtn != undefined) {startBtn.addEventListener("click", function answerDisplay () {
    // calls function to go to the next question
    goNextQuestion()
    } 
);
}
function goNextQuestion() {
    headingEl.innerHTML = "";
    // removes content from the p tag with questions class
    questionsEl.innerHTML = "";
    var removeBtns = document.querySelectorAll("button");
    for (i = 0; i < removeBtns.length; i++) {
        removeBtns[i].remove();
    }
    // var questArrTexts = questionArray[i];
    if (timeDown === 0 || currentQuestion >= questionArray.length  ) {  
        questionsEl.innerHTML = "";
            clearInterval(timerInterval);
            headingEl.style.marginTop = "1%";
            headingEl.style.fontSize = "60px";
            headingEl.innerHTML = "All done!";
            if (rightNumbers === 1) {
                questionsEl.innerHTML = "Your final score is " + rightNumbers + " question correct at "+ timeDown + " seconds left!"
                localStorage.setItem("time", "this.timeDown");
            } else {questionsEl.innerHTML = "Your final score is " + rightNumbers + " questions correct at "+ timeDown + " seconds left!"};
            localStorage.setItem("time", "this.timeDown");
            var form = document.querySelector(".newform");
            var initInput = document.createElement("input");
            initInput.setAttribute("type", "text");
            initInput.setAttribute("placeholder", "Input your initials");
            form.appendChild(initInput);
            // A series of attributes and styles to the anchor tag like a button
            var submitBtn = document.createElement("button");
            submitBtn.innerText = "Submit";
            submitBtn.setAttribute("class", "submit");
            answersEl.remove();
            startBtn.remove();
        submitBtn.addEventListener("click", function() { saveScore  (initInput.value, timeDown);
        });
        form.appendChild(submitBtn);        
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
        // inserts an answer choice into the new button
        newAnsBtn.innerHTML = questArrAns[i];
        // appends this new button to the answer element
        answersEl.appendChild(newAnsBtn);
        // sets the width of answer div to 800px
        answersEl.style.width = "800px"
        // displays the button in a block
        newAnsBtn.style.display = "block";
        // styles the answer element
        ansStyler();
        // listens for clicks on the new buttons for right or wrong answers
        newAnsBtn.addEventListener("click", answerClick);   
    }
}};
function answerClick(event) {
    // grab the one that was clicked
    var selectedButton = event.target;
    currentQuestion++;
    if (selectedButton.hasAttribute("data")) {
            judgeEl.innerHTML = "Correct!";
            judgeEl.style.color= "green";
            judgeEl.style.borderTop = "4px solid";
                judgeEl.style.borderImageSource = "linear-gradient(45deg, rgb(0,220,96), rgb(250,165,242))";
                judgeEl.style.borderImageSlice = "1";
                judgeEl.style.marginTop = "20px";
            rightNumbers++;
            goNextQuestion(); 
        } else {
                timeDown -= 10;
                if (timeDown <= 0) {
                    currentQuestion = null;
                    timeDown = 0;
                    questionsEl.innerHTML = "";
                };
                judgeEl.innerHTML = "Wrong!";
                judgeEl.style.color = "red";
                judgeEl.style.borderTop = "4px solid";
                judgeEl.style.borderImageSource = "linear-gradient(45deg, rgb(250,24,84), rgb(234,22,200))";
                judgeEl.style.borderImageSlice = "1";
                judgeEl.style.marginTop = "20px";
                wrongNumbers++;
                goNextQuestion();
                console.log(wrongNumbers);  
            }  
    };
function saveScore(name, score) {
    var scoreObj = {initials: name, points: score};
    var scoreArr = [];
    scoreArr.push(scoreObj);
    
    var stringArr = JSON.stringify(scoreArr);
    if (localStorage.getItem("allScores") == null) {
        localStorage.setItem("allScores", stringArr);
} else {
    var getScores = localStorage.getItem("allScores");
    var parsedScores = JSON.parse(getScores);
    parsedScores.push(scoreObj);
    localStorage.setItem("allScores", JSON.stringify(parsedScores));
}
  window.location.href = "./hsindex.html";
}

var scoredList = document.querySelector("#scorelist");
if (scoredList != undefined) {
    var getScores = localStorage.getItem("allScores");
    var parsedScores = JSON.parse(getScores);
    parsedScores.forEach(element => {
        var listItem = document.createElement("LI");
        scoredList.appendChild(listItem);
        listItem.innerHTML = element.initials + " - " +
        element.points;

    });
}
clearBtn.addEventListener("click", function() {
    localStorage.removeItem("allScores");
    scoredList.innerHTML = "";
});
