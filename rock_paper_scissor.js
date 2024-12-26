let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame =() =>{
    console.log("Game was draw.");
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    console.log("You Won.");
    }
    else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText =`You Lost ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "Red";
    console.log("You loss.");   
    }
};
const playGame = (userChoice)=>{
 //Generate computer
 const compChoice = genCompChoice();

 if(userChoice===compChoice){
    drawGame();
 }
 else{
    let userWin = true;
    if(userChoice==="rock"){
        //scissor, paper
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice==="paper"){
        //rock, scsissor
        userWin = compChoice === "scissor"? false : true;
    }
    else{
        //rock, paper
        compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
 }
};
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});
