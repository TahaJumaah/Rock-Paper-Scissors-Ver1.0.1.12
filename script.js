console.log("To play the Game, type play(); then make a choice, Rock, Paper, or Scissors.")
let userChoiceText = 'Rock'
let userChoice = '0'
let computerChoice = '0';



function userChoiceTransform(){
    if (userChoiceText.toLowerCase() === "rock" ) {
        userChoice = 1
    }
    else if (userChoiceText.toLowerCase() === "paper"){
        userChoice = 2
    }
    else {userChoice = 3}
}

function play(){
    userChoiceText = prompt("Pick a Hand, Rock, Paper, or Scissors." , "")
    computerChoice = Math.floor((Math.random()*3)+1)

   console.log(computerChoice)
   if (computerChoice === 1){
    computerChoiceText = "Rock"
   }
   else if (computerChoice === 2){
    computerChoiceText = "Paper"
   }
   else {
    computerChoiceText = "Scissors"
   }
   console.log(computerChoiceText)

   userChoiceTransform()
   console.log(`You Picked${userChoiceText} ${userChoice}`)
}



