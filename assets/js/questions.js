const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices"); 
const feedbackBox = document.querySelector("#feedback"); 

let feedback; 

// Question 1
let Q1 = () => {
   questionTitle.textContent = "Which of methods doesn't cause side effects?" 
   choices.innerHTML = "<p>1. push</p><p class=\"correct\">2. splice</p><p>3. slice</p><p>4. pop</p>"
   feedback = "Splice. Side Effects are changes to an element. Splice doesn't mutate the array it's applied to, all the others do"
}
// Question 2
let Q2 = () => {
    questionTitle.innerHTML = `<p class="blue-text">(div onclick=”turnBlue()”)<p>
        <p class="red-text">(div onclick=”turnRed()”)</p>
        <p class="green-text">(div onclick=”turnGreen()”)(/div)</p>
        <p class="red-text">(/div)</p>
        <p class="blue-text">(/div)<p>
        <p>If you click the red div, which colours will appear? (stopPropogation has not been used)</p>`
    
    choices.innerHTML = "<p>1. only red and green</p><p>2. all colours</p><p>3. only red</p><p  class=\"correct\">4. only red and blue</p>"
    feedback = "Red and Blue. Event bubbling means the node you click, and any click events on higher nodes will be triggered."
 }
// Question 3
let Q3 = () => {
    questionTitle.textContent = "if (const addMe = \"here\") Which of these will print \"Put constant here please\"" 
    choices.innerHTML = `<p class=\"correct\">1. console.log(\`Put constant \${addMe} here\`)</p>
    <p>2. console.textContent = \`Put constant \${addMe} here\`</p>
    <p>3. console.log(\"Put constant \${addMe} here\")</p>
    <p>4. console.textcontent = \"Put constant \${addMe} here\"</p>`;
    feedback = "1. To use dollar sign notation, you must use backsticks (`). .textContent can't be used on the console"
 }
// Question 4
let Q4 = () => {
    questionTitle.textContent = "Which of these statements is true?" 
    choices.innerHTML = `<p>1. Javascript can be used to change the HTML, but not the DOM</p>
    <p>2. Javascript can be used to change both the DOM and HTML</p>
    <p class=\"correct\">3. Javascript can be used to change the DOM, but not the HTML</p>
    <p>4. Javascript can't change the DOM or HTML</p>`
    feedback = "DOM, not HTML. The DOM is what is rendered to the page, so to make any noticeable changes you must change it. Your HTML file will not change"
 }
// Question 5
let Q5 = () => {
    questionTitle.textContent = "What does this code do to a function? (function () { /*function here*/ })();" 
    choices.innerHTML = `<p>1. It causes an error as it's invalid</p>
    <p >2. It adds an optional parameter to the function</p>
    <p>3. It checks if the output of the function is a particular type of data</p>
    <p class=\"correct\">4. It calls the function immediately after it's created</p>`
    feedback = "4. This is an immediately invoked function. It's not accessible outside this line of code"
 } 
// Question 6
let Q6 = () => {
    questionTitle.textContent = "Which input type is best to use to answer 'Subscribe to our newsletter?' on a signup page?" 
    choices.innerHTML = `<p>1. Email</p>
    <p class=\"correct\">2. Radio</p>
    <p>3. Text</p>
    <p>4. Checkbox</p>`;
    feedback = "Radio only allows user to select one option. If you used checkbox, the user could select both yes and no. The email should be inputed earlier in the form"
 } 
// Question 7
let Q7 = () => {
    questionTitle.textContent = "Which of these element types is NOT considered semantic HTML?" 
    choices.innerHTML = `<p>1. header</p>
    <p>2. title</p>
    <p class=\"correct\">3. section</p>
    <p>4. figcaption</p>`;
    feedback = "The title is an element in the head, it doesn't tell you about what content on the page is for"
 } 
// Question 8
let Q8 = () => {
    questionTitle.textContent = "Which of these target an element with attribute of attr=\"value-at-end\"?" 
    choices.innerHTML = `<p class=\"correct\">1. [attr^=”end”]</p>
    <p>2. [attr$=”end”]</p>
    <p>3. [attr|=”end”]</p>
    <p>4. [attr~=”end”]</p>`;
    feedback = "^ find 'end' at end. $ finds at start. | finds exact word 'end', or 'end' at start followed by -, ~ finds 'end' as a whole word seperated by whitespace"
 } 
// Question 9
let Q9 = () => {
    questionTitle.innerHTML = '<p>HTML: (p style="color: blue" class="red-text" id="green-text")Text Here(/p)</p>'
    questionTitle.innerHTML += '<p>CSS: .red-text{ color: red;}, #green-text{ color: green;}</p>'
    questionTitle.innerHTML += '<p>What colour will the text be?</p>'
    choices.innerHTML = `<p>1. green</p>
    <p>2. red</p>
    <p class=\"correct\">3. blue</p>
    <p>4. black / unchanged</p>`;
    feedback = "Inline styling takes precendent over external styling. Inline > internal > external (id > class)"
 } 
// Question 10 
let Q10 = () => {
    questionTitle.textContent = "From inside to outside, which of these best represents to box-model" 
    choices.innerHTML = `<p>1. Content -> Padding -> Margin -> Border</p>
    <p>2. Content -> Margin -> Border -> Padding</p>
    <p>3. Content -> Margin -> Padding -> Border</p>
    <p class=\"correct\">4. Content -> Padding -> Border -> Margin</p>`;
    feedback = "Content -> Padding (space between content and border) -> Border -> Margin (space between border and other boxes)"
 } 


let QuestionArray = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10]
feedbackBox.setAttribute("class", "hide")
