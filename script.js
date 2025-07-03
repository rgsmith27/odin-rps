let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let rng = Math.random();
    if (rng > .66){
        return "ROCK";
    }
    if (rng > .33){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }
}

function getHumanChoice(){
    let rng = Math.random();
    let response;
    if (rng > .66){
        response = prompt(`The machine's hands move so fast as to be impossible to percieve. There's no telling what your opponent might do. 
            What do you choose?`);
    }
    else if (rng > .33){
        response = prompt(`While you are only playing a JavaScript console, you can still feel its hatred through the blank white background.
            What do you choose?`);
    }
    else{
        response = prompt(`You must make a decision. The machine has made its long before you were ready.
            What do you choose?";`)
    }
    response = response.toUpperCase();
    if(response == "ROCK" || response == "PAPER" || response == "SCISSORS"){
        return response;
    }
    else{
        console.log("You cannot avoid the choice.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    switch(humanChoice){
        case "ROCK":
            switch(computerChoice){
                case "ROCK":
                    console.log("ROCK and ROCK, it's a tie!");
                    break;
                case "PAPER":
                    console.log("PAPER beats ROCK, you lose!");
                    computerScore++;
                    break;
                case "SCISSORS":
                    console.log("ROCK beats SCISSORS, you win!");
                    humanScore++;
                    break;
            }
            break;
        case "PAPER":
            switch(computerChoice){
                case "ROCK":
                    console.log("PAPER beats ROCK, you win!");
                    humanScore++;
                    break;
                case "PAPER":
                    console.log("PAPER and PAPER, it's a tie!");
                    break;
                case "SCISSORS":
                    console.log("SCISSORS beats PAPER, you lose!");
                    break;
            }
            break;
        case "SCISSORS":
            switch(computerChoice){
                case "ROCK":
                    console.log("ROCK beats SCISSORS, you lose!");
                    computerScore++;
                    break;
                case "PAPER":
                    console.log("SCISSORS beats PAPER, you win!");
                    humanScore++;
                    break;
                case "SCISSORS":
                    console.log("SCISSORS and SCISSORS, it's a tie!");
                    break;
            }
            break;
    }
}

playRound(getHumanChoice(),getComputerChoice());