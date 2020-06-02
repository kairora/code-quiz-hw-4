var scoreList = document.querySelector(".scorelist")
var scoreArr = [];

function showScores() {
    // Clear score list element at start
    scoreList.innerHTML = "";
    
    // Loop to create a new li for each score set
    for (var i = 0; i < scoreArr.length; i++) {
      var eachScore = scoreArr[i];
      var li = document.createElement("li");
      li.innerHTML = eachScore;
      li.setAttribute("data-index", i);
    //sets the li inside the 
      scoreList.appendChild(li);
    }
  }

  