# Homework-4

For this homework assignement, it was necessary to code JavaScript to produce a multiple choice quiz.  I made a simple five question quiz made up of NFL history questions.

First, I set up the initial HTML with my divs, ids and start button along with some basic CSS.

For the JavaScript, I started with the variables using the getElementbyId function to reference the elements.

Next, I set up the event listener for the start button to start the quiz.

I then designed an opject of questions with an array for each answer set and the index of the correct response.

My functions in my JavaScript included a

#StartQuiz - on click, the timer appears and begin to countdown.  Once the timer hits zero, the quiz ends.  It also hids the start button and quiz instructions.

#ClickCorrect - if the user clicks the correct answer, the score increments by 10, and the user is notified that the answer was correct.  It then displays the next question and answers in the array.

#ClickIncorrect - if the user clickes the incorrect answer, the score does not change, and the user is notified that the answer was incorrect.  It then displays the next question and answers in the array.

#DisplayQuestion - The display question function makes the quiz appear.  It contains a for loop that cycles through the questions array.  It also contains an if statement with click listeners for the user answer.

#EndQuiz - the end quiz function calculates the user's score based on their score and time remaining.  It also prompts the user to enter a name.

I had difficulty placing the information in local storage, and thus did not make the high score screen.  However, I am pleased with this quiz and what I was able to accomplish.

