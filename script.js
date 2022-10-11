

// Generates target number
function generateTarget(){
   return Math.floor(Math.random()*10);
}


// Compares the human choice vs computer
function compareGuesses(userChoice,computerChoice,target){
  const compHuman = Math.abs(target - userChoice);
  const compComputer = Math.abs(target-computerChoice);

  return compHuman <= compComputer;
  }

  //Updates score
function updateScore(winner){
  if(winner === 'human'){
    humanScore ++;
  }
  else if(winner ==='computer'){
    computerScore ++;
  }
}
//Creates new round
function advanceRound(){
  currentRoundNumber ++;
}