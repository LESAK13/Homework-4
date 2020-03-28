var start = document.getElementById("start");
var scoreDisplay = document.getElementById("score");
var score = 0;
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var answers = [];
answers.push(document.getElementById("answer1"));
answers.push(document.getElementById("answer2"));
answers.push(document.getElementById("answer3"));
answers.push(document.getElementById("answer4"));
var outcome = document.getElementById("outcome");
var timerCountdown = document.getElementById("countdown");
var quizTime = 60;
var currentQuestion = 0;

document.getElementById("start").addEventListener("click", startQuiz);

var questions = [
    {
        question: "Which of the following NFL teams has never won a Super Bowl?",
        options: ["Tampa Bay Bucaneers", "New York Jets", "Washington Redskins", "Detroit Lions"],
        correctOption: 3

    },

    {
        question: "Who holds the single-season record for rushing yards?",
        options: ["Adrian Peterson", "Eric Dickerson", "Walter Payton", "Barry Sanders"],
        correctOption: 1

    },

    {
        question: "Who was the 1st overall pick of the 2017 NFL Draft by the Cleveland Browns?",
        options: ["Denzel Ward", "Baker Mayfield", "Myles Garrett", "Jabrill Peppers"],
        correctOption: 2
    },

    {
        question: "Who was the MVP of Super Bowl XLVIII between the Denver Broncos and Seattle Seahawks?",
        options: ["Malcolm Smith", "Marshawn Lynch", "Russell Wilson", "Richard Sherman"],
        correctOption: 0

    },

    {
        question: "Who holds the single-game record for receptions?",
        options: ["Jerry Rice", "Brandon Marshall", "Terrell Owens", "Tim Brown"],
        correctOption: 1
    },
];

function startQuiz() {
    setInterval(function () {
        timerCountdown.textContent = "Timer: " + quizTime
        quizTime--;
    }, 1000);
    start.style.display = "none";
    displayQuestion(0);
};

function clickCorrect() {
    score += 10;
    scoreDisplay.innerHTML = score;
    outcome.textContent = "Correct";
    setInterval(function () {
        outcome.textContent = "";
    }, 3000);
    displayQuestion(++currentQuestion);
};

function clickIncorrect() {
    outcome.textContent = "Wrong";
    setInterval(function () {
        outcome.textContent = "";
    }, 3000);
    displayQuestion(++currentQuestion);
};

function endQuiz() {
    quiz.style.display = "none";
};

var displayQuestion = function displayQ(questionNumber) {
    quiz.style.display = "block";
    question.textContent = questions[questionNumber].question;
    if (currentQuestion > 4 || quizTime == 0) {
        endQuiz
    }else
    for (var i = 0; i < answers.length; i++) {
        answers[i].innerHTML = questions[currentQuestion].options[i];
        if (i == questions[currentQuestion].correctOption) {
            answers[i].addEventListener("click", clickCorrect);
        }else{
            answers[i].addEventListener("click", clickIncorrect);
        };
    };
};




