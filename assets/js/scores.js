// FROM LOGIC.JS
// const startBtn = document.querySelector("#start")
// const startScreen = document.querySelector("#start-screen")
// const questionScreen = document.querySelector("#questions")
// const endScreen = document.querySelector("#end-screen")
// const timeDisplay = document.querySelector("#time")
// const finalScoreDisplay = document.querySelector("#final-score")

// FROM QUESTIONS.JS
// const questionTitle = document.querySelector("#question-title");
// const choices = document.querySelector("#choices"); 
// const feedbackBox = document.querySelector("#feedback"); 
// let score = 0; 

// New Variables
const clearHS = document.querySelector("#clear"); 
const HSDisplay = document.querySelector("#highscores"); 
let localScore1 = localStorage.getItem("quizScore1"); 
let localScore2 = localStorage.getItem("quizScore2"); 
let localScore3 = localStorage.getItem("quizScore3"); 

renderScores = () => {
    if (!localScore1 && !localScore2 && !localScore3) {
        console.log("all null")
        HSDisplay.textContent = "No scores found"
    } else {
        console.log("else" + localScore1 + localScore2 + localScore3)
        if (localScore1) {
            HSDisplay.innerHTML = `<h4>1st Place</h4>
            <p>User: ${JSON.parse(localScore1).user}</p>
        <p>Score: ${JSON.parse(localScore1).score}</p>`
        }; 
        if (localScore2) {
            HSDisplay.innerHTML += `<br>
            <h4>2nd Place</h4>
                <p>User: ${JSON.parse(localScore2).user}</p>
            <p>Score: ${JSON.parse(localScore2).score}</p>` 
        }; 
        if (localScore3) {
            HSDisplay.innerHTML += `<br>
            <h4>1st Place</h4>
                <p>User: ${JSON.parse(localScore3).user}</p>
            <p>Score: ${JSON.parse(localScore3).score}</p>`
        }
      }
}
renderScores(); 

clearHS.addEventListener("click", (event) => {
    // const localScore1 = localStorage.getItem("quizScore1");
    localStorage.setItem("quizScore1", ""); 
    localStorage.setItem("quizScore2", ""); 
    localStorage.setItem("quizScore3", ""); 
    localScore1 = "";
    localScore2 = "";
    localScore3 = ""; 
  renderScores(); 
})