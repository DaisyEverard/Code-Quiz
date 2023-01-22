# Code Quiz

## Preview

## Link to site

## Description

This is a quiz with 10 questions about coding. 
Features:
 - If all 10 questions are answered, the quiz ends (Although this is not intended to happen within the time allowed)
 - If time runs out, the quiz stops
 - Displays final score on screen
 - stores the top 3 scores locally (if two scores are equal, the most recent takes precendent)
 - Highscores can be viewed and reset with 'View Highscores' link
 - Name can be changed until you leave the submit screen
 - 'play again' function
 - When answer submitted: Timer pauses, feedback and next question button appear.
 - It wrong answer causes time to run out, 'next question' becomes 'end'

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

## License 

MIT License