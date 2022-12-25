let playerScore = 0;
let computerScore = 0;
const gameobjects = ["rock", "paper", "scissor"];

//Players will be prompted to type rock, paper, or scissor. Input was made to be case-insenstive and if rock, paper, or scissor are typed incorrectly, it will prompt user to type it correctly
function getPlayerChoice () {
    let input = prompt("Type 'rock', 'paper', or 'scissor'!")
    
    input = input.toLowerCase();

    while (input != "rock" && input != "paper" && input != "scissor") {
    input = prompt ("Please type 'rock', 'paper', or 'scissor' correctly!");
    }
    return input;
} 

//Computer will return a random word from the variable gameobjects
function getComputerChoice () {
    return gameobjects[Math.floor(Math.random()*gameobjects.length)];
}

//Round Rules (FYI: Always have a variable = to the OUTPUT of the function)
function playRound() {
    console.log ("Round is Starting!");
    let playerchoice = getPlayerChoice();
    let computerchoice = getComputerChoice();
    console.log ("Player Chose", playerchoice);
    console.log ("Computer Chose", computerchoice);
    if (playerchoice === computerchoice) { 
        return "Tie!" 
      }
        else if (playerchoice === "rock" && computerchoice === "scissor") {
            playerScore++ 
            return "You Win, Rock beats Scissor!";
        }
        else if (playerchoice === "scissor" && computerchoice === "paper") {
            playerScore++ 
            return "You Win, Scissor beats Paper!";
        }
        else if (playerchoice === "paper" && computerchoice === "rock") {
            playerScore++
            return "You Win, Paper beats Rock!"; 
        }
        else if (playerchoice === "scissor" && computerchoice === "rock") {
            computerScore++
            return "You Lost, Rock beats Scissor!"; 
        }
        else if (playerchoice === "paper" && computerchoice === "scissor") {
            computerScore++
            return "You Lost, Scissor beats Paper!";
        }
        else if (playerchoice === "rock" && computerchoice === "paper") {
            computerScore++
            return "You Lost, Paper beats Rocks!";
        }
}

//Play up to 5 rounds against the computer and point system to determine winner at the end
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(i));
    }
    if (playerScore > computerScore) {
            return "You won against a computer! Congrats!";
        }
        else if (playerScore < computerScore) {
            return "You lost to a computer! Try Again!";
        }
        else {
            return "You tied with the computer! That ain't too bad!";
        }
    }
console.log(game());
