# Code Quiz

## Preview

## Link to site

## Description

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