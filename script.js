//get computer choice by using Math.random function
function getComputerChoice()
{
    let computerChoice = Math.random();
    if(computerChoice >= 0 && computerChoice < 0.39)
    {
        return "ROCK";
    } 
    else if(computerChoice >=0.39  && computerChoice < 0.69)
    {
        return "PAPER";
    } 
    else if(computerChoice >=0.69)
    {
        return "SCISSOR";
    } 
}


//declare the button for human choice
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");


//by clicking the button playRound function will be called to start the game
rock.addEventListener("click", () => playRound("ROCK"));
paper.addEventListener("click", () => playRound("PAPER"));
scissor.addEventListener("click", () => playRound("SCISSOR"));




// delcare human and computer scores
let humanScore = 0;
let computerScore = 0;

//show the scores for both human and computer
const h_sco = document.getElementById("h_sco");
const c_sco = document.getElementById("c_sco");

    h_sco.textContent = humanScore;
    c_sco.textContent = computerScore;


//dispay the result of each by using dom method
const display = document.querySelector(".display");

const result = document.createElement("div");

result.classList.add("result");
result.textContent = "Result will show here";
result.setAttribute("style", "font-size : 40px; margin:80px auto;");

display.appendChild(result);


//function to consider for each round
function playRound(humanChoice)
{
    const computerChoice = getComputerChoice();

    if (humanChoice === 'ROCK' && computerChoice === 'PAPER')
    {
        result.textContent = "You lose this round! Paper beats Rock";
        computerScore++;
    }
    else if (humanChoice === 'ROCK' && computerChoice === 'SCISSOR')
    {
        result.textContent = "You Win this round! ROCK beats SCISSOR";
        humanScore++;
    }
    else if (humanChoice === 'ROCK' && computerChoice === 'ROCK')
    {
        result.textContent = "Draw Round!";
    }
    else if (humanChoice === 'PAPER' && computerChoice === 'ROCK')
    {
        result.textContent = "You Win this round! PAPER beats ROCK";
        humanScore++;
    }
    else if (humanChoice === 'PAPER' && computerChoice === 'SCISSOR')
    {
        result.textContent = "You lose this round! SCISSOR beats PAPER";
        computerScore++;
    }
    else if (humanChoice === 'PAPER' && computerChoice === 'PAPER')
    {
        result.textContent = "Draw Round!";
    }
    else if (humanChoice === 'SCISSOR' && computerChoice === 'ROCK')
    {
        result.textContent = "You lose this round! ROCK beats SCISSOR";
        computerScore++;
    }
    else if (humanChoice === 'SCISSOR' && computerChoice === 'PAPER')
    {
        result.textContent = "You win this round! SCISSOR beats PAPER";
        humanScore++;
    }
    else if (humanChoice === 'SCISSOR' && computerChoice === 'SCISSOR')
    {
        result.textContent = "Draw Round!";
    }

    h_sco.textContent = humanScore;
    c_sco.textContent = computerScore;

    //final show the winner of the game
    if (humanScore === 5 || computerScore === 5)
    {
        result.textContent = "";
        result.textContent += humanScore === 5 ? " 🎉 Congratulation! You won the game!" : " 😢 Sorry!!Computer won the game.";
        disableButtons();
    }
}

//disable the button when the game is end
function disableButtons()
{
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
}

//make reset button to restart the game
const res_con = document.querySelector("#res_con");
const res_btn = document.createElement("button");

res_btn.classList.add("res_btn");
res_btn.textContent = "Reset";
res_btn.setAttribute("style", "background-color: rgb(255, 255, 255); font-size: 20px; padding: 15px; border-radius: 15px;border: none; cursor : pointer;");

res_con.appendChild(res_btn);

res_btn.addEventListener("click" , restart);

//make restart function
function restart()
{
    humanScore = 0;
    computerScore = 0;

    h_sco.textContent = humanScore;
    c_sco.textContent = computerScore;

    result.textContent = "Result will show here";

    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissor").disabled = false;
}


