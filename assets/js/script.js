var headerEl = document.querySelector("#header");
var formEl = document.querySelector("#form");
var quizIdCounter = 0;
var questionEl = document.querySelector("#questions");
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

var quizStart = function() {
    event.preventDefault();

    var quizQuestions = ["Question 1", "Question 2", "Question 3"];

    console.log("fu");
};

formEl.addEventListener("submit", quizStart);
