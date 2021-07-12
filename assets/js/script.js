var headerEl = document.querySelector("#header");
var formEl = document.querySelector("#form");
var answerEl = document.querySelector("#answer");
var startButtonEl = document.querySelector("#btn");
var quizIdCounter = 0;
//var correctAnswer = 0
var questionEl = document.querySelector("#question");
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];





var generateQuestions = function() {
  event.preventDefault();

  if (quizIdCounter < myQuestions.length) {
        
    var newQuestion = myQuestions[quizIdCounter];
    questionEl.innerHTML = (newQuestion);

  }
  var myAnswers = 
  quizIdCounter++;
  generateAnswers();
}

var generateAnswers = function(quizIdCounter) {
  for (let i = 0; i < myAnswers.length; i++) {

    var buttonEl = document.createElement("button");
    buttonEl.innerHTML = (myAnswers[i]);
    buttonEl.className = "btn";
    buttonEl.setAttribute("data-task-id", quizIdCounter);
    formEl.appendChild(buttonEl);
  }
};


formEl.addEventListener("submit", function() {
  generateQuestions();
});
