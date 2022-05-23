// global variables
const values = ['Rock', 'Paper', 'Scissor'];
//function generating ROCK/PAPER/SCISSOR randomly
function computerSelection (){
    const random = Math.floor(Math.random()*3);
    const compValue = values[random].toLowerCase();
    return compValue ;
}
// function selecting players input
function playerSelection(){
    let playerValue = prompt("Please Select option[Rock/Paper/Scissor]").toLowerCase();
    if(playerValue==='rock'|| playerValue === 'paper'|| playerValue === 'scissor')
    return playerValue;
    else {
    playerValue = prompt('Please enter valid value').toLowerCase();
    return playerValue;
    }
}
//winner Selection
 function Gameplay(){
     const playerSelect = playerSelection();
     const compSelect = computerSelection();
     console.log( "Player selected :",playerSelect);
     console.log("Computer Selected :", compSelect);
     if(playerSelect===compSelect){
        return 'both';
     }
     else if(playerSelect==='rock'){
            if(compSelect==='paper')
            return 'comp';
            else if(compSelect==='scissor')
            return 'player';
        }
    else if(playerSelect==='paper'){
        if(compSelect==='rock')
        return 'player';
        else if(compSelect==='scissor')
        return 'comp';
        }
    else if(playerSelect==='scissor'){
        if(compSelect==='paper')
        return 'player';
        else if(compSelect==='rock')
        return 'comp';
    } 
 }
 // rounds to be played
 function playRound(){
     const rounds = 5;
     let compScore = 0;
     let playerScore =0;
     console.log('Best of five game');
     for(i=0; i<rounds; i++){
        let result;
        result = Gameplay();
        if(result==='both'){
        compScore++;
        playerScore++;
        console.log('the winner:',result);
       } else if(result === 'comp'){
        compScore++;
        console.log('the winner:',result);
       } else if(result === 'player'){
        playerScore++;
        console.log('the winner:',result);
       }
     }
     console.log(`the final score computer:${compScore} and player: ${playerScore}` )
 }