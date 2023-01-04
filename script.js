//Variables for game
let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById("playerScore");
let computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
let results_div = document.querySelector(".results");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissor_div = document.getElementById("Scissor");
const gameobjects = ["c-Rock", "c-Paper", "c-Scissor"];

//Variables for start screen
const startmodalEl = document.getElementById("startmodalEl");
const startbuttonEl = document.getElementById("startbuttonEl");

//Variables for game over screen
const modalEl = document.getElementById("modalEl");
const modalscoreEl = document.getElementById("modalscoreEl");
const restartbuttonEl = document.getElementById("restartbuttonEl");

//Button function for player choice
function getPlayerChoice () {
    rock_div.addEventListener('click', function() {
        playRound("Rock");
    })

    paper_div.addEventListener('click', function() {
        playRound("Paper");
    })

    scissor_div.addEventListener('click', function() {
        playRound("Scissor");
    })
}

//Computer will return a random word from the variable gameobjects
function getComputerChoice () {
    return gameobjects[Math.floor(Math.random()*gameobjects.length)];
}

//Take player choice from getPlayerChoice function and compare it to computer's choice
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    
    if (playerChoice === computerChoice) { 
        return tie();
      }
        else if (playerChoice === "Rock" && computerChoice === "c-Scissor") {
            return win(playerChoice, computerChoice);
        }
        else if (playerChoice === "Scissor" && computerChoice === "c-Paper") {
            return win(playerChoice, computerChoice);
        }
        else if (playerChoice === "Paper" && computerChoice === "c-Rock") {
            return win(playerChoice, computerChoice);
        }
        else if (playerChoice === "Scissor" && computerChoice === "c-Rock") {
            return lose(playerChoice, computerChoice);
        }
        else if (playerChoice === "Paper" && computerChoice === "c-Scissor") {
            return lose(playerChoice, computerChoice);
        }
        else if (playerChoice === "Rock" && computerChoice === "c-Paper") {
            return lose(playerChoice, computerChoice);
        }
}

function tie () {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    results_div.innerHTML = "Tie!";
    return gameOver();
}

function win (playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    results_div.innerHTML = playerChoice + " Beats " + computerChoice + ". You Won This Round!";
    document.getElementById(playerChoice).classList.add('green-glow')
    setTimeout(function() {document.getElementById(playerChoice).classList.remove('green-glow')}, 1000);
    document.getElementById(computerChoice).classList.add('red-glow')
    setTimeout(function() {document.getElementById(computerChoice).classList.remove('red-glow')}, 1000);
    return gameOver();
}

function lose (playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    results_div.innerHTML = computerChoice + " Beats " + playerChoice + ". You Lost This Round!";
    document.getElementById(playerChoice).classList.add('red-glow')
    setTimeout(function() {document.getElementById(playerChoice).classList.remove('red-glow')}, 1000);
    document.getElementById(computerChoice).classList.add('green-glow')
    setTimeout(function() {document.getElementById(computerChoice).classList.remove('green-glow')}, 1000);
    return gameOver();
}

//First to reach 5 points win. Overlay will pop up saying the result and if you want to play again
function gameOver () {
    if (playerScore === 5) {
            modalEl.style.display = "block";
            modalscoreEl.innerHTML = "You Win!";
        }

        else if (computerScore === 5) {
            modalEl.style.display = "block";
            modalscoreEl.innerHTML = "You Lost!";
        }
    } 

//Starts the game with start button
startbuttonEl.addEventListener('click', startGame);
function startGame () {
    startmodalEl.style.display = "none";
}

//Resets the game with restart button
restartbuttonEl.addEventListener('click', restartGame);
function restartGame () {
    playerScore = 0;
    computerScore = 0;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    results_div.innerHTML = "Throw Your Hand!";
    modalEl.style.display = "none";
    window.stop();
}

getPlayerChoice ()