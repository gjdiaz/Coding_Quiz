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
      // Calls function to create and append message
      sendMessage();
    }

  }, 1000); // 1000 = milliseconds
}


var timeoutId = function() {
  clearTimeout(timeoutId);
};

// Function to create and append message after clearTimeout
function sendMessage() {
  timeEl.textContent = "Good job!";
  document.getElementById("current-question").style.display = "none";
  document.getElementById("true").style.display = "none";
  document.getElementById("false").style.display = "none";
}


window.onload = function() {
  document.getElementById("start-quiz").style.display = "none";
}

startBtn.addEventListener("click", startQuiz);

function startQuiz()  {
  alert("Quiz has started. Good luck!");
  document.getElementById("main").style.display = "none";
  document.getElementById("start-quiz").style.display = "block";
  //randomize(questions);
  getOutput()
}

// prompt for next question on true/false answer

var trueButton = document.getElementById("true");
var falseButton = document.getElementById("false");
var index = 0;
var question1 = "Java is short for JavaScript";
var answer1 = "False";
var question2 = "Logical operators take in two or more expressions and return true or false";
var answer2 = "True";
var question3 = "The index of the first element in an array is '1'";
var answer3 = "False";
var question4 = "A variable declared in global scope is available to all functions";
var answer4 = "True";
var question5 = "The 'push' method adds elements to the end of an array";
var answer5 = "True";
var question6 = "The 'this' keyword refers to the object from which the function was called";
var answer6 = "True";
var question7 = "Undefined, string, number, and boolean data types are refered to as 'native' data stypes";
var answer7 = "False";
trueButton.addEventListener("click", getOutput);
falseButton.addEventListener("click", getOutput);

var questions = [question1, question2, question3, question4, question5, question6, question7];
/*  {
    Question1: "Java is short for JavaScript",
    correctAnswer: "False"
  },
  {
    Question2: "Logical operators take in two or more expressions and return true or false",
    correctAnswer: "True"
  },
  {
    Question3: "The index of the first element in an array is '1'",
    correctAnswer: "False"
  },
   { 
    Question4: "A variable declared in global scope is available to all functions",
     correctAnswer: "True"
   },
   {
     Question5: "The 'push' method adds elements to the end of an array",
     correctAnswer: "True"
   }, 
   {
     Question6: "The 'this' keyword refers to the object from which the function was called",
     correctAnswer: "True"
   },
   {
     Question7: "Undefined, string, number, and boolean data types are refered to as 'native' data stypes",
     correctAnswer: "False"
   }
]; */


function randomize(questions) {
    var currentIndex = questions.length;
    var currentQuestion, randomIndex;

    while (currentIndex > 1 ) {
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
     currentQuestion = questions[currentIndex];
      questions[currentIndex] = questions[randomIndex];
      questions[randomIndex] = currentQuestion;

    }
    return questions;
}

function getOutput() {
    randomize(questions);
    document.getElementById("current-question").innerHTML = questions[0];
}

