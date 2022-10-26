console.log("To play the Game, type play(); then make a choice, Rock, Paper, or Scissors.")
let userChoiceText = 'Rock'
let computerChoiceText = "sss";
let userChoice = '0'
let computerChoice = '0';
let computerScore = '0';
let userScore = '0';
let rockChoice = document.querySelector(".rocksign");
let paperChoice  = document.querySelector(".papersign");
let scissorsChoice = document.querySelector(".scissorssign");
let computerScoreText = document.getElementById('computerScore').textContent;
let userScoreText = document.getElementById('you').textContent;
let announcementText = document.getElementById('announcement').textContent;

function scoreOnPage(){
    document.getElementById('computerScore').textContent = computerScoreText + computerScore;
    document.getElementById('you').textContent = userScoreText + userScore;
    document.getElementById('announcement').textContent = computerChoiceText


}

function iPressedRock(){
    userChoiceText = "rock"
    play()
    scoreOnPage()
}

function iPressedPaper(){
    userChoiceText = "paper"
    play()
    scoreOnPage()

}

function iPressedScissors(){
    userChoiceText = "scissors"
    play()
    scoreOnPage()

}


rockChoice.addEventListener("click", iPressedRock)
paperChoice.addEventListener("click", iPressedPaper)
scissorsChoice.addEventListener("click", iPressedScissors)



function play(){

    
    computerChoice = Math.floor((Math.random()*3)+1)

   if (computerChoice === 1){
    computerChoiceText = "The computer picked Rock"
   }
   else if (computerChoice === 2){
    computerChoiceText = "The computer picked Paper"
   }
   else {
    computerChoiceText = "The computer picked Scissors"
   }
//    userChoiceText = userChoiceText.toLowerCase()


//    This Part is for the logic, of who wins and loses.
if (userChoiceText === "rock" || userChoiceText === "paper" || userChoiceText === "scissors"){
    console.log(computerChoiceText)
switch (userChoiceText) {
    case "rock":
        console.log("You picked Rock")
        if (computerChoice === 3){
            console.log("You win this one.")
            userScore++
        }
        else if (computerChoice === 2) {
            console.log("You lose this one.")
            computerScore++
        }
        else if (computerChoice === 1){
            console.log("It's a draw, no one gets this one.")
        }
        break;

    case "paper":
        console.log("You picked Paper")
        if (computerChoice === 3){
            console.log("You lose this one, you SUCK!")
            computerScore++
        }
        else if (computerChoice === 2){
            console.log("It's a Draw, GIT GUD!")
        }
        else if (computerChoice === 1) {
            console.log("You win this one.")
            userScore++
        }
        break;

    case "scissors":
        console.log("You picked Scissors")
        if (computerChoice === 3) {
            console.log("It's a draw, GIT GUD!")
        }

        else if (computerChoice === 2){
            console.log("You win this one.")
            userScore++
        }
        else if (computerChoice === 1){
            console.log("You lose this one, you SUCK!")
            computerScore++
        }
        break;
}
}
else{
    console.log("Either pick Rock, Paper, or Scissors.")
}
console.log(`Computer: ${computerScore} You: ${userScore}`)

if (computerScore === 3){
    console.log("Game Over, you lost, Resetting.")
    userScore = 0
    computerScore = 0
    document.getElementById('announcement2').textContent = "Game Over, you lost, Resetting."

    
    
}

else if(userScore === 3){
    console.log("Game Over, you Win, Resetting.")
    userScore = 0
    computerScore = 0
    document.getElementById('announcement2').textContent = "Game Over, you won, Resetting."


}

console.log("------------------------")

}




// This part is for the calculation of the score, and ending the game:

// while (computerScore < 3 && userScore < 3){
//     // play()
//     if (computerScore === 3) {
//         console.log("The computer won the game, try to practice more.")
//     }
//     else if (userScore === 3) {
//         console.log("You won the game, congrats, expect a call from the president anytime now.")
//     }
// }








// function userChoiceTransform(){
//     userChoiceText.toLowerCase()
//     if (userChoiceText.toLowerCase() === "rock" ) {
//         userChoice = 1
//     }
//     else if (userChoiceText.toLowerCase() === "paper"){
//         userChoice = 2
//     }
//     else {userChoice = 3}
// }
