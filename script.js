// Creating a function to get computer choice
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


// Creating a function to get human choice
function getHumanChoice()
{
    let humanChoice = prompt("Please Input your Choice!!");
    return humanChoice.toUpperCase();
}



//creating a function for the whole game
function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    

        //creating a function to play each round
        function playRound(humanChoice, computerChoice)
        {
            if (humanChoice === 'ROCK' && computerChoice === 'PAPER')
            {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            }
            else if (humanChoice === 'ROCK' && computerChoice === 'SCISSOR')
            {
                console.log("You Win! ROCK beats SCISSOR");
                humanScore++;
            }
            else if (humanChoice === 'ROCK' && computerChoice === 'ROCK')
            {
                console.log("Draw Round!");
            }
            else if (humanChoice === 'PAPER' && computerChoice === 'ROCK')
            {
                console.log("You Win! PAPER beats ROCK");
                humanScore++;
            }
            else if (humanChoice === 'PAPER' && computerChoice === 'SCISSOR')
            {
                console.log("You lose! SCISSOR beats PAPER");
                computerScore++;
            }
            else if (humanChoice === 'PAPER' && computerChoice === 'PAPER')
            {
                console.log("Draw Round!");
            }
            else if (humanChoice === 'SCISSOR' && computerChoice === 'ROCK')
            {
                console.log("You lose! ROCK beats SCISSOR");
                computerScore++;
            }
            else if (humanChoice === 'SCISSOR' && computerChoice === 'PAPER')
            {
                console.log("You win! SCISSOR beats PAPER");
                humanScore++;
            }
            else if (humanChoice === 'SCISSOR' && computerChoice === 'SCISSOR')
            {
                console.log("Draw Round!");
            }
        }

        //Using looping to play 5 games
        for(let i = 0; i < 5 ; i++)
        {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);
        }

        //Considering the game winner depent on the scores
        if (humanScore > computerScore)
        {
            console.log("Congratulation! You win the Game.");
        }
        else if (computerScore > humanScore)
        {
            console.log("Sorry, Computer win the Game.");
        }
        else
        {
            console.log("Oppps,  Draw Game! Interesing..");
        }
}


//call the function to start the game
playGame();


//end of the code


