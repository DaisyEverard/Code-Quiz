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
const localScore = localStorage.getItem("quizScore"); 

renderScores = () => {
    if (localScore === null) {
        HSDisplay.textContent = "No scores found"
    } else {
        HSDisplay.innerHTML = `<p>User: ${JSON.parse(localScore).user}</p>
    <p>Score: ${JSON.parse(localScore).score}`
    }
}

renderScores(); 

clearHS.addEventListener("click", (event) => {
    localStorage.clear("quizScore"); 
    console.log("clear clicked")
    
    renderScores(); 
})

