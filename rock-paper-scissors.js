"use strict";

function playGame() {
  let humanSelection, computerSelection;
  
  function getHumanSelection() {
    // const prompt = require('prompt-sync')();
    let humanSelection = prompt("What would you like to Choose? (Rock / Paper / Scissor):");
    humanSelection = humanSelection.toLowerCase();
    return humanSelection
  }
  
  function getComputerSelection() {
      let minOption = 1, maxOption = 4;
      let computerChoice = Math.floor(Math.random() * (maxOption - minOption) + minOption);
      
      if (computerChoice == 1)  return "rock";
      if (computerChoice == 2)  return "paper";
      if (computerChoice == 3)  return "scissor";
  }

  
  function playRound(humanChoice, computerChoice) {
    // your code here!
    let human_score = 0, computer_score = 0, ties = 0;
    console.log(`You Choose: ${humanChoice} | Opponent Choose: ${computerChoice}`)
    if (humanChoice === computerSelection){
      console.log("It's a TIE!")
      ties++
    }else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock.")
      computer_score++;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
      console.log("You lose! Scissor beats Paper.")
      computer_score++;
    } else if (humanChoice === "scissor" && computerChoice === "rock") { 
      console.log("You lose! Rock beats Scissor.")
      computer_score++; 
    }else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You Win! Paper beats Rock.")
      computer_score++;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      console.log("You Win! Scissor beats Paper.")
      computer_score++;
    } else if (humanChoice === "rock" && computerChoice === "scissor") { 
      console.log("You Win! Rock beats Scissor.")
      computer_score++;
    } else {  
      console.log("Invalid Input!")
    }
    console.log(`Your's Score: ${human_score} | Opponent's Score: ${computer_score}`)
    console.log("---------------------------------------------")
    return [human_score, computer_score, ties];
  }

  for (let round = 1; round <= 5; round++) {
    humanSelection = getHumanSelection()
    computerSelection = getComputerSelection()
    playRound(humanSelection, computerSelection);
  }
}

playGame()
