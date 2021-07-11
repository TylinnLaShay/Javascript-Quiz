var headerEl = document.querySelector("#header");
var formEl = document.querySelector("#form");
var quizIdCounter = 0;

var quizStart = function() {
    event.preventDefault();
    
    console.log("fu");
};

formEl.addEventListener("submit", quizStart);
