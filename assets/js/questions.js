const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices"); 


// Question 1
let Q1 = () => {
   questionTitle.textContent = "Which of methods doesn't cause side effects?" 
   choices.innerHTML = "<p>1. push</p><p class=\"correct\">2. splice</p><p>3. slice</p><p>4. pop</p>"
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
 }
// Question 3

// Question 4

Q3();
let QuestionArray = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10]