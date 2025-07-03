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

function getHumanChoice(){
    let rng = Math.random();
    if (rng > .66){
        return prompt(`The machine's hands move so fast as to be impossible to percieve. There's no telling what your opponent might do. 
            What do you choose?`);
    }
    if (rng > .33){
        return prompt(`While you are only playing a JavaScript console, you can still feel its hatred through the blank white background.
            What do you choose?`);
    }
    else{
        return prompt(`You must make a decision. The machine has made its long before you were ready.
            What do you choose?";`)
    }
}
