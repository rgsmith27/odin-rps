function getComputerChoice(){
    let rng = Math.random();
    if (rng > .66){
        return "rock";
    }
    if (rng > .33){
        return "paper";
    }
    else{
        return "scissors";
    }
}

console.log(getComputerChoice());