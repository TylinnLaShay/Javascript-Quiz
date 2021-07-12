//QUERY SELECTORS
var headerEl = document.querySelector("#header");
var formEl = document.querySelector("#form");
var answerEl = document.querySelector("#answer");
var startButtonEl = document.querySelector("#btn");
var answerDivEl = document.querySelector("#answers");
var questionEl = document.querySelector("#question");

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
//to remove previous buttons
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
    //hopefully recording sometype of answer
      document.body.addEventListener('click', function(e){
      if(e.target.getAttribute("data-task-id") === correctAnswers[correctCounter]){
      console.log('correct');
      correctCounter++;
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


//ON CLICK START QUIZ
formEl.addEventListener("submit", function() {
  event.preventDefault();
  clicks++;
  if (clicks > myQuestions.length + 1) {
    console.log("Your score is" + correctCounter);

  }
  formEventHandler();
});
