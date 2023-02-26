# Code Quiz
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Preview

<p align="center">
  <img src=".\assets\images\question preview.png" width="500" alt="question answered correctly">
</p>
<p align="center">
  <img src=".\assets\images\highscore preview.png" width="500" alt="display of highscores">
</p>

## Link to site

https://daisyeverard.github.io/Code-Quiz/index.html

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Technologies](#technologies)
- [Issues and Solutions](#issues-and-solutions)
- [Contacts](#contacts)


## Description

This is a quiz with 10 questions about coding. 
Features:
 - If all 10 questions are answered, the quiz ends (Although this is not intended to happen within the time allowed)
 - If time runs out, the quiz stops
 - Displays final score on screen
 - stores the top 3 scores locally (if two scores are equal, the most recent takes precendent)
 - Highscores can be reset with a button
 - Name can be changed until you leave the submit screen
 - When answer submitted: Timer pauses, feedback and next question button appear.
 - Feedback box is red if incorrect, green if correct.
 - If a wrong answer causes time to run out, 'next question' becomes 'end'
 - 'Play Again' button which refreshes the page. 
 
 ## Usage
 
 Quiz
 - Click `Start Quiz` to begin
 - Read the question, then click one of the purple boxes with answers in them
 - Read the feedback box about the answer to the question. Don't worry! the timer will pause while you review your answer. 
 - When you are ready, click the `Next Question` box to see the next question. 
 - If you get a question wrong, 10s will be deducted from the remaining time
 - At the end, click the `End` button to see your score
 - Enter your name and click `Submit` to store your score in the highscores
 
 Highscores
 - To view highscores, click `View Highscores` in the top left
 - Scroll through the highscores with scrollbar
 - Click `Clear Highscores` to remove current scores
 - Click `Go Back` to be taken the the main page

## Technologies

- HTML
- CSS
- JavaScript
- Local Storage / JSON

## Issues and solutions

1. Pausing timer

using `let exVar = setInterval(/*write function*/, interval)` format, once cleared with `clearInterval(exVar)`, can't be restarted with `exVar();`
Instead write a fuction seperately, and reassign the variable each time you want to restart the interval. <br>
`const intFunc = () => /**/;` <br>
`let exVar = setInterval(intFunc, interval);` <br>
`clearInterval(exVar); ` <br>
`exVar = setInterval(intFunc, interval);` <br>
Notice you don't use `()` after the `intFun` function name, as this would call it immediately and stop the interval working. 

2. Resetting High Score

`localStorage.clear()` takes no parameters, it just clears all stored data. To reset a particular value use  `localStorage.setItem("itemToReset", "");`

Creating a variable using a stored value doesn't get updated with that value, it just takes whatever was stored as its initial value. To reset the display, you need to reset both `localStorage` and the `localScore` variables

`Var1, Var2, Var3 = "";` is not valid syntax, this must be seperated out onto 3 lines. 

## Contacts

- GitHub: [DaisyEverard](https://github.com/DaisyEverard)
- LinkedIn: [daisy-everard](https://www.linkedin.com/in/daisy-everard/)
- Email: msdeverard@gmail.com

## License 

MIT License
