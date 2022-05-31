// global variables
const values = ['Rock', 'Paper', 'Scissor'];
const buttonSelect = document.querySelectorAll('.buttons');
const playerScoreId = document.querySelector('#playerScoreId');
const compScoreId = document.querySelector('#compScoreId');
const compSelectId = document.querySelector('#compSelect');
const playerSelectId = document.querySelector('#playerSelect');
const reset = document.querySelector('#reset');




//function generating ROCK/PAPER/SCISSOR randomly for computer

function computerSelection (){
    const random = Math.floor(Math.random()*3);
    const compValue = values[random].toLowerCase();
    return compValue ;
}
 // function for round play

 function playRound(e){
    const playerSelect = e.target.getAttribute('id');
    const compSelect = computerSelection();
    compSelectId.setAttribute('src',`images/${compSelect}.png`);
    playerSelectId.setAttribute('src',`images/${playerSelect}.png`);
    // determining winner of the round
    if(playerSelect===compSelect){
        compScore++;
        compScoreId.textContent = compScore;
        playerScore++;
        playerScoreId.textContent = playerScore;
     } 
     else if(playerSelect==='rock'){
        if(compSelect==='paper'){
            compScore++;
            compScoreId.textContent = compScore;
        }
        else if(compSelect==='scissor'){
            playerScore++;
            playerScoreId.textContent = playerScore;
        }
    } 
    else if(playerSelect==='paper'){
        if(compSelect==='rock'){
            playerScore++;
            playerScoreId.textContent = playerScore;
        }
        else if(compSelect==='scissor'){
            compScore++;
            compScoreId.textContent = compScore; 
        }
        }
    else if(playerSelect==='scissor'){
        if(compSelect==='paper'){
            playerScore++;
            playerScoreId.textContent = playerScore;

        }
        else if(compSelect==='rock'){
            compScore++;
            compScoreId.textContent = compScore;
        }
    } 
 }
// Function for Reseting Game

function resetGame(){
    compScore = 0;
    playerScore = 0;
    compScoreId.textContent = compScore;
    playerScoreId.textContent = playerScore;
    compSelectId.setAttribute('src',`images/rock.png`);
    playerSelectId.setAttribute('src',`images/rock.png`); 
   }

// Game Play

resetGame();
buttonSelect.forEach((btn)=>{
    btn.addEventListener('click', playRound);
 });
// reset game
reset.addEventListener('click', ()=>{
    resetGame();
});
