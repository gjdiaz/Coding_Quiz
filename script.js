// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start");

startBtn.addEventListener("click", startTimer);

var secondsLeft = 10;

function startTimer() {
  // Sets interval in variable
  // 2 arguments being passed - function/function definition and 1000
  var timerInterval = setInterval(function() {

    secondsLeft--;
    timeEl.textContent = "You have " + secondsLeft + " seconds remaining in the game.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000); // 1000 = milliseconds
}


var timeoutId = function() {
  clearTimeout(timeoutId);
};

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = "Good job!";
}



window.onload = function() {
  document.getElementById("start-quiz").style.display = "none";
}

startBtn.addEventListener("click", startQuiz);

function startQuiz()  {
  alert("quiz has started");
  document.getElementById("main").style.display = "none";
  document.getElementById("start-quiz").style.display = "block";
  //randomize(questions);
  getOutput()
}


var submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", getOutput);

var questions = ['Question1', 'Question2', 'Question3'];

function randomize(questions) {
    var currentIndex = questions.length;
    var tempQuestion, randomIndex;

    while (currentIndex > 1 ) {
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
     tempQuestion = questions[currentIndex];
      questions[currentIndex] = questions[randomIndex];
      questions[randomIndex] = tempQuestion;

    }
    return questions;
}

function getOutput() {
    randomize(questions);
    document.getElementById("display-question").innerHTML = questions[0];
}



