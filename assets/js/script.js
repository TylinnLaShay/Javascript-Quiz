//QUERY SELECTORS
var headerEl = document.querySelector("#header");
var formEl = document.querySelector("#form");
var answerEl = document.querySelector("#answer");
var startButtonEl = document.querySelector("#btn");
var answerDivEl = document.querySelector("#answers");
var questionEl = document.querySelector("#question");
var viewScoresEl = document.querySelector("#tag");

//COUNTERS
var quizIdCounter = 0;
var counterAnswer = 0;
var clicks = 0;
var correctCounter = 0;

//ARRAY FOR QUESTIONS
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "2"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "2"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "ESLint",
    },
    correctAnswer: "2"
  }
];

// variable to store the list of possible answers
const answers = [];
const question = [];
const correctAnswers = [];

// for each question...
myQuestions.forEach(
  (currentQuestion) => {

    // and for each available answer...
    for(letter in currentQuestion.answers){
      answers.push(currentQuestion.answers[letter]);
    }
    //add question to output
    question.push(currentQuestion.question);
    //add correct answer to the output
    correctAnswers.push(currentQuestion.correctAnswer);
  }
);

//function to remove previous buttons
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}



var generateQuestions = function() {
  event.preventDefault();
  if (quizIdCounter < myQuestions.length) {
        
    var newQuestion = question[quizIdCounter];
    questionEl.innerHTML = (newQuestion);
    quizIdCounter++;
  }
  generateAnswers();
}

var generateAnswers = function() {
  for (let i = 0; i < myQuestions.length; i++) {

    var buttonEl = document.createElement("button");
    var newAnswer = answers[counterAnswer];
    var correct = correctAnswers[counterAnswer];

    //creating answer buttons

    buttonEl.innerHTML = (newAnswer);
    buttonEl.className = "btn";
    buttonEl.setAttribute("data-task-id", [i]);
    counterAnswer++;
    //appending each button to div
    answerDivEl.appendChild(buttonEl);
  };
};

    //records correct answers
      document.body.addEventListener('click', function(e){
      if(e.target.getAttribute("data-task-id") === correctAnswers[correctCounter]){
      console.log('correct');
      correctCounter++;
      count = count + 10;
    }
    else {
      count = count - 10;
    }
    });

var formEventHandler = function() {
  if (quizIdCounter > 0) {
    removeAllChildNodes(answerDivEl);
    generateQuestions();
  }
  else {
    document.querySelector("#btn").remove();
    document.querySelector("#answer").remove();
    generateQuestions();
  }

}

var endGame = function() {
  removeAllChildNodes(formEl);
  //create element to show score

  var endDisplay = document.createElement('div');
  endDisplay.className = "end";
  endDisplay.id = 'end';
  endDisplay.innerHTML = ((correctCounter + count));

  formEl.appendChild(endDisplay);
  //create element to get userName

  var userName = document.createElement('input');
  userName.id = ('username');
  var saveData = document.createElement('button');
  saveData.className = "btn";
  saveData.innerHTML = ('Save your score!');
  formEl.appendChild(userName);
  formEl.appendChild(saveData);

//display scores
  var highScores = function() {
    removeAllChildNodes(formEl);
    var high = document.createElement('div');
    var name = localStorage.getItem('user-name');
    var numbers = localStorage.getItem('highscore');
    high.innerHTML = ("User " + name + ". " + "With highscore of " + numbers);
    formEl.appendChild(high);
  }

  //save to localStorage
  saveData.addEventListener('click', function() {
    var scoreName = document.getElementById('username').value;
    var score = document.getElementById('end').innerHTML;
    var highscore = localStorage.getItem("highscore");

    if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);      
      }
    } 
    else{
      localStorage.setItem("highscore", score);
    }
    localStorage.setItem('user-name', scoreName);
    highScores();
  })

}


//ON CLICK START QUIZ
formEl.addEventListener("submit", function() {
  event.preventDefault();
  clicks++;
  if (clicks > myQuestions.length) {
    console.log("Your score is" + correctCounter);
    endGame();
  }
  formEventHandler();
});

//timer only
var count=40;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  if (clicks >= 1) {
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     endGame();
     return;
  }
  else if (clicks > myQuestions.length) {
    return;
  }

  document.getElementById("#timer").innerHTML=count + " seconds";
}}


//to get to highscores page
viewScoresEl.addEventListener("click", function(){
  removeAllChildNodes(formEl);
  var high = document.createElement('div');
  var name = localStorage.getItem('user-name');
  var numbers = localStorage.getItem('highscore');
  high.innerHTML = ("User " + name + ". " + "With highscore of " + numbers);
  formEl.appendChild(high);
});