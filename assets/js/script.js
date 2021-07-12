var headerEl = document.querySelector("#header");
var formEl = document.querySelector("#form");
var answerEl = document.querySelector("#answer");
var startButtonEl = document.querySelector("#btn");
var quizIdCounter = 0;
var counterAnswer = 0;
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
      c: "ESLint",
    },
    correctAnswer: "c"
  }
];
// variable to store the list of possible answers
const answers = [];
const question = [];

// for each question...
myQuestions.forEach(
  (currentQuestion, quizIdCounter) => {

    // and for each available answer...
    for(letter in currentQuestion.answers){
      answers.push(currentQuestion.answers[letter]);
    }

    // add this question and its answers to the output
    question.push(currentQuestion.question);
  }
);




var generateQuestions = function() {
  event.preventDefault();

  if (quizIdCounter < myQuestions.length) {
        
    var newQuestion = question[quizIdCounter];
    questionEl.innerHTML = (newQuestion);

  }
  quizIdCounter++;
  generateAnswers();
}

var generateAnswers = function() {
  for (let i = 0; i < myQuestions.length; i++) {

    var buttonEl = document.createElement("button");
    var newAnswer = answers[counterAnswer];

    //creating answer buttons

    buttonEl.innerHTML = (newAnswer);
    buttonEl.className = "btn";
    buttonEl.setAttribute("data-task-id", quizIdCounter);
    counterAnswer++;
    //appending each button to div

    var buttonsEl = document.createElement("div");
    buttonsEl.setAttribute("id", "btn");
    buttonsEl.appendChild(buttonEl);
    formEl.appendChild(buttonsEl);
  }
};


formEl.addEventListener("submit", function() {
  generateQuestions();
});
