const startBtn = document.querySelector("#start")
const startScreen = document.querySelector("#start-screen")
const questionScreen = document.querySelector("#questions")
const endScreen = document.querySelector("#end-screen")
const timeDisplay = document.querySelector("#time")
const finalScoreDisplay = document.querySelector("#final-score")
const userInitialsInput = document.querySelector("#initials")
const submitScore = document.querySelector("#submit")
const confirmSubmit = document.querySelector("#confirm-submit")
const playAgain = document.querySelector("#play-again")

let localScore1 = localStorage.getItem("quizScore1"); 
let localScore2 = localStorage.getItem("quizScore2"); 
let localScore3 = localStorage.getItem("quizScore3"); 

// QUESTIONS
// SECTION
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices"); 
const feedbackBox = document.querySelector("#feedback"); 
let feedback; 
let score;  

// START OF QUESTIONS
// Question 1
let Q1 = () => {
   questionTitle.textContent = "Which of methods doesn't cause side effects?" 
   choices.innerHTML = "<button>1. push</button><button class=\"correct\">2. slice</button><button>3. splice</button><button>4. pop</button>"
   feedback = "Slice. Side Effects are changes to an element. Slice doesn't mutate the array it's applied to, all the others do"
}
// Question 2
let Q2 = () => {
    questionTitle.innerHTML = `<p class="blue-text">(div onclick=”turnBlue()”)<p>
        <p class="red-text">(div onclick=”turnRed()”)<p>
        <p class="green-text">(div onclick=”turnGreen()”)(/div)<p>
        <p class="red-text">(/div)<p>
        <p class="blue-text">(/div)<p>
        <p>If you click the red div, which colours will appear? (stopPropogation has not been used)<p>`
    
    choices.innerHTML = "<button>1. only red and green</button><button>2. all colours</button><button>3. only red</button><button  class=\"correct\">4. only red and blue</button>"
    feedback = "Red and Blue. Event bubbling means the node you click, and any click events on higher nodes will be triggered."
 }
// Question 3
let Q3 = () => {
    questionTitle.textContent = "if (const addMe = \"here\") Which of these will print \"Put constant here please\"" 
    choices.innerHTML = `<button class=\"correct\">1. console.log(\`Put constant \${addMe} here\`)</button>
    <button>2. console.textContent = \`Put constant \${addMe} here\`</button>
    <button>3. console.log(\"Put constant \${addMe} here\")</button>
    <button>4. console.textcontent = \"Put constant \${addMe} here\"</button>`;
    feedback = "1. To use dollar sign notation, you must use backsticks (`). .textContent can't be used on the console"
 }
// Question 4
let Q4 = () => {
    questionTitle.textContent = "Which of these statements is true?" 
    choices.innerHTML = `<button>1. Javascript can be used to change the HTML, but not the DOM</button>
    <button>2. Javascript can be used to change both the DOM and HTML</button>
    <button class=\"correct\">3. Javascript can be used to change the DOM, but not the HTML</button>
    <button>4. Javascript can't change the DOM or HTML</button>`
    feedback = "DOM, not HTML. The DOM is what is rendered to the page, so to make any noticeable changes you must change it. Your HTML file will not change"
 }
// Question 5
let Q5 = () => {
    questionTitle.textContent = "What does this code do to a function? (function () { /*function here*/ })();" 
    choices.innerHTML = `<button>1. It causes an error as it's invalid</button>
    <button >2. It adds an optional parameter to the function</button>
    <button>3. It checks if the output of the function is a particular type of data</button>
    <button class=\"correct\">4. It calls the function immediately after it's created</button>`
    feedback = "4. This is an immediately invoked function. It's not accessible outside this line of code"
 } 
// Question 6
let Q6 = () => {
    questionTitle.textContent = "Which input type is best to use to answer 'Subscribe to our newsletter?' on a signup page?" 
    choices.innerHTML = `<button>1. Email</button>
    <button class=\"correct\">2. Radio</button>
    <button>3. Text</button>
    <button>4. Checkbox</button>`;
    feedback = "Radio only allows user to select one option. If you used checkbox, the user could select both yes and no. The email should be inputed earlier in the form"
 } 
// Question 7
let Q7 = () => {
    questionTitle.textContent = "Which of these element types is NOT considered semantic HTML?" 
    choices.innerHTML = `<button>1. header</button>
    <button>2. title</button>
    <button class=\"correct\">3. section</button>
    <button>4. figcaption</button>`;
    feedback = "The title is an element in the head, it doesn't tell you about what content on the page is for"
 } 
// Question 8
let Q8 = () => {
    questionTitle.textContent = "Which of these target an element with attribute of attr=\"value-at-end\"?" 
    choices.innerHTML = `<button class=\"correct\">1. [attr^=”end”]</button>
    <button>2. [attr$=”end”]</button>
    <button>3. [attr|=”end”]</button>
    <button>4. [attr~=”end”]</button>`;
    feedback = "^ find 'end' at end. $ finds at start. | finds exact word 'end', or 'end' at start followed by -, ~ finds 'end' as a whole word seperated by whitespace"
 } 
// Question 9
let Q9 = () => {
    questionTitle.innerHTML = '<p>HTML: (p style="color: blue" class="red-text" id="green-text")Text Here(/p)</p>'
    questionTitle.innerHTML += '<p>CSS: .red-text{ color: red;}, #green-text{ color: green;}</p>'
    questionTitle.innerHTML += '<p>What colour will the text be?</p>'
    choices.innerHTML = `<button>1. green</button>
    <button>2. red</button>
    <button class=\"correct\">3. blue</button>
    <button>4. black / unchanged</button>`;
    feedback = "Inline styling takes precendent over external styling. Inline > internal > external (id > class)"
 } 
// Question 10 
let Q10 = () => {
    questionTitle.textContent = "From inside to outside, which of these best represents to box-model" 
    choices.innerHTML = `<button>1. Content -> Padding -> Margin -> Border</button>
    <button>2. Content -> Margin -> Border -> Padding</button>
    <button>3. Content -> Margin -> Padding -> Border</button>
    <button class=\"correct\">4. Content -> Padding -> Border -> Margin</button>`;
    feedback = "Content -> Padding (space between content and border) -> Border -> Margin (space between border and other boxes)"
 } 
//  END OF QUESTIONS

let questionArray = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10]

// FUNCTIONS

// Show endscreen 
let endScreenShow = () => {
    questionScreen.setAttribute("class", "hide");
    feedbackBox.setAttribute("class", "hide"); 
    endScreen.removeAttribute("class", "hide") ; 
}
// choose new question and add to display
let newQuestion = () => {
    if (questionArray.length > 0) {
        let index = Math.floor(Math.random() * questionArray.length); 
    questionArray[index]();
    questionArray.splice(index, 1)
    } else {
       endScreenShow(); 
    }
; 
} 

// reusable function for timer
const intervalFunc = () => {
    if(timeDisplay.textContent > 0) {
    timeDisplay.textContent --; 
} else {
    finalScoreDisplay.textContent = score;
    endScreenShow(); 
    clearInterval(intervalFunc); 
}}

// Game logic 
let game = () => {
        // reset score, choose first question
        score = 0;  
        newQuestion(); 
        // hide other screens, show questions
        startScreen.setAttribute("class", "hide"); 
        endScreen.setAttribute("class", "hide");
        questionScreen.removeAttribute("class", "hide"); 
        
        // Timer initial start
        timeDisplay.textContent = 9; 
    let interval = setInterval(intervalFunc, 1000); 
    
        // When an answer is chosen
        let clickCount = 0;
        choices.addEventListener("click", event => {
            // only allows you to answer once
            if(clickCount !== 0) {
                return; 
            } else {
                clickCount++; 
                // right answer
                if (event.target.getAttribute("class") === "correct") {
                    feedbackBox.textContent = "CORRECT! ";
                    feedbackBox.style.backgroundColor = "#8fd18f"
                    score ++; 
                } else {
                    // stop timer going below 0
                     if (timeDisplay.textContent > 10) {
                    timeDisplay.textContent -= 10; 
                } else {
                    timeDisplay.textContent = 0; 
                }
                feedbackBox.textContent = "";
                feedbackBox.style.backgroundColor = "#ff9c9c"
            }
            
            // add feedback text, show feedbackbox, pause timer
                feedbackBox.textContent += feedback; 
                feedbackBox.removeAttribute("class", "hide"); 
                clearInterval(interval); 
    
                // fiveSecond pause before next Question & restart timer
                let fiveSeconds = setTimeout(() => {
                    if (timeDisplay.textContent > 0) {feedbackBox.setAttribute("class", "hide");
                    newQuestion();
                    clickCount = 0;
                    interval = setInterval(intervalFunc, 1000);
                  } else {
                    endScreenShow(); 
                    finalScoreDisplay.textContent = score;
                  }
                }, 5000)  
            }     
        })
    }

// START BUTTON, 
startBtn.addEventListener("click", game); 
// NEW GAME (endscreen)
playAgain.addEventListener("click", () => {
    localScore1 = localStorage.getItem("quizScore1"); 
    localScore2 = localStorage.getItem("quizScore2"); 
    localScore3 = localStorage.getItem("quizScore3"); 
    confirmSubmit.textContent = ""; 
    game();}); 

// store score and username
submitScore.addEventListener("click", (event) => {
       let userName = userInitialsInput.value;
    let userObj = {
        "user": userName, 
        "score": score 
    }
    // catch 'null' when no scores recorded yet
    if(localScore1) {
        if (userObj.score >= JSON.parse(localScore1).score) {
            localStorage.setItem("quizScore2", localScore1); 
            localStorage.setItem("quizScore3", localScore2); 
            localStorage.setItem("quizScore1", JSON.stringify(userObj)); 
            confirmSubmit.textContent = "Score Submitted. Top score!!!"
            // if no second score or higher
        } else if (!localScore2 || userObj.score >= JSON.parse(localScore2).score) {
            localStorage.setItem("quizScore3", localScore2); 
            localStorage.setItem("quizScore2", JSON.stringify(userObj)); 
            confirmSubmit.textContent = "Score Submitted. 2nd top score!!"
            // if no 3rd score or higher
        } else if (!localScore3 || userObj.score >= JSON.parse(localScore3).score) {
            localStorage.setItem("quizScore3", JSON.stringify(userObj)); 
            confirmSubmit.textContent = "Score Submitted! 3rd top score!!"
        } else {
            confirmSubmit.textContent = "Sorry, You're not in the top 3"
        }} else {
            // set first score
            localStorage.setItem("quizScore1", JSON.stringify(userObj)); 
            confirmSubmit.textContent = "Score Submitted. Top score!!!"
        }
        confirmSubmit.innerHTML += "<p>To change your name, just type it and submit again!</p>"
    }
)


