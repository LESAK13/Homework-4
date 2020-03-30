var start = document.getElementById("start");
var instructions = document.getElementById("instructions");
var scoreDiv = document.getElementById("scoreDiv");
var scoreDisplay = document.getElementById("score");
var scoreTitle = document.getElementById("scoreTitle");
var score = 0;
var finalScore = document.getElementById("finalScore");
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
var highscores = document.getElementById("highscores");


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
]

var lastQuestion = questions.length - 1;
var timerId;

function startQuiz() {
    timerId = setInterval(function () {
        timerCountdown.textContent = "Timer: " + quizTime;
        quizTime--;
        if (quizTime <= 0) {
            endQuiz();
        }
    }, 1000);
    start.style.display = "none";
    instructions.style.display = "none";
    displayQuestion(0);
}

function clickCorrect() {
    if (currentQuestion >= lastQuestion) {
        score += 10;
        scoreDisplay.innerHTML = score;
        endQuiz();
    } else{
        score += 10;
        scoreDisplay.innerHTML = score;
        outcome.textContent = "Correct";
        setTimeout(function () {
            outcome.textContent = "";
        }, 2000);
        displayQuestion(++currentQuestion);
    }
}

function clickIncorrect() {
    if (currentQuestion >= lastQuestion) {
        endQuiz();
    } else{
    quizTime -= 10;
    outcome.textContent = "Wrong";
    setTimeout(function () {
        outcome.textContent = "";
    }, 2000);
    displayQuestion(++currentQuestion);
    }
}

function displayQuestion(questionNumber) {
    quiz.style.display = "block";
    question.textContent = questions[questionNumber].question;
    for (var i = 0; i < answers.length; i++) {
        answers[i].innerHTML = questions[questionNumber].options[i];
        if (i == questions[questionNumber].correctOption) {
            answers[i].addEventListener("click", clickCorrect);
            answers[i].removeEventListener("click", clickIncorrect);
        } else {
            answers[i].addEventListener("click", clickIncorrect);
            answers[i].removeEventListener("click", clickCorrect);
        }
    }
}

function endQuiz() {
    var adaptedFinalScore = Math.round(quizTime/4+score);
    var userName = document.getElementById("userName");
    quiz.style.display = "none";
    clearInterval(timerId);
    timerCountdown.textContent = "";
    highscores.style.display = "block";
    scoreDiv.style.display = "none";
    finalScore.textContent = "Your Final Score is " + adaptedFinalScore;
    localStorage.setItem("userName", userName.textContent);
}




