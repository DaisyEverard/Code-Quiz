const startBtn = document.querySelector("#start")
const startScreen = document.querySelector("#start-screen")
const questionScreen = document.querySelector("#questions")
const endScreen = document.querySelector("#end-screen")
const timeDisplay = document.querySelector("#time")


startBtn.addEventListener("click", () => {
    // hide start screen, show questions
    startScreen.setAttribute("class", "hide"); 
    questionScreen.removeAttribute("class", "hide"); 
    
    // Timer
    timeDisplay.textContent = 60; 
  let intervalFunc = setInterval(() => {
        if(timeDisplay.textContent > 0) {
            timeDisplay.textContent --; 
        } else {
            clearInterval(intervalFunc); 
            questionScreen.setAttribute("class", "hide");
            endScreen.removeAttribute("class", "hide") ; 
        }
    }, 1000);
})

