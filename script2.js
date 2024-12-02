let phand = "";
let hand = "";
let round = "";
let ppoints = 0;
let cpoints = 0;
let result = "";

alert("This game is played in the console currently. Press Control+Shift+J on Windows or press Command+Option+J on Mac to open the console")

console.log("type playGame(); to play")

//get human choice
function playGame() {
for (var i = 1; i < 6; i++) playRound(i);

function playRound(userMove, compChoice) {

let move = prompt("Rock, Paper or Scissors?")

function userMove() {
if (move.toLowerCase() === "rock") 
    phand = "Rock";
if (move.toLowerCase() === "paper") 
    phand = "Paper";
if (move.toLowerCase() === "scissors") 
    phand = "Scissors";

return "Player has chosen " + phand;
}

console.log(userMove())


//get comp choice

function compChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;
    if (randomNumber == 1)
        hand = "Rock";
    else if (randomNumber == 2)
        hand = "Paper";
    else if (randomNumber == 3)
        hand = "Scissors";

        return "Computer has chosen " + hand;

}
console.log(compChoice());




// who wins the round

function roundWin() {
    if (phand == "Rock" && hand == "Rock")
        round = "Tie";
    else if (phand == "Rock" && hand == "Paper")
        round = "Loss";
    else if (phand == "Rock" && hand == "Scissors")
        round = "Win";
    else if (phand == "Paper" && hand == "Rock")
        round = "Win";
    else if (phand == "Paper" && hand == "Paper")
        round = "Tie";
    else if (phand == "Paper" && hand == "Scissors")
        round = "Loss";
    else if (phand == "Scissors" && hand == "Rock")
        round = "Loss";
    else if (phand == "Scissors" && hand == "Paper")
        round = "Win";
    else if (phand == "Scissors" && hand == "Scissors")
        round = "Tie";
    else if (phand == "" && hand == "")
        round = "new game state playGame(); to start";

    return "This is a " + round;
} 

console.log(roundWin())

//Score

const pscore = 0;
const cscore = 0;


function playscore() {
    if (round == "Win")
        ppoints++;
    else if (round == "Loss")
        ppoints = ppoints;
    else if (round == "Tie")
        ppoints = ppoints;

    return "Your points are " + ppoints;
}

console.log(playscore())

function compscore() {
    if (round == "Win")
        cpoints = cpoints;
    else if (round == "Loss")
        cpoints++;
    else if (round == "Tie")
        cpoints = cpoints;

    return "Computer's points are " + cpoints;
}

console.log(compscore())



}

function winner() {
    if (cpoints < ppoints)
        result = "won";
    else if (cpoints > ppoints)
        result = "lost";
    else if (cpoints == ppoints)
        result = "tied";

    return "You " + result + " the game!";
}

console.log(winner())

}


