// console.log("hello World");
// global variables
const values = ['Rock', 'Paper', 'Scissor'];
//function generating ROCK/PAPER/SCISSOR randomly
function computerSelection (){
    const random = Math.floor(Math.random()*3);
    const compValue = values[random];
    return compValue ;
}
// function selecting players input
function playerSelection(){
    const playerValue = prompt("Please Select option[Rock/Paper/Scissor");
    return playerValue;
}
//winner Selection
 function Gameplay(){
     const playerSelect = playerSelection().toLowerCase();
     const compSelect = computerSelection().toLowerCase();
     console.log( "Player selected :",playerSelect);
     console.log("Computer Selected :", compSelect);
     if(playerSelect===compSelect){
        console.log("Its a tie");
     }
     else if(playerSelect==='rock'){
            if(compSelect==='paper')
            console.log("You lose! Paper beaats Rock");
            else if(compSelect==='scissor')
            console.log('You WIn! Rock beats Scissor');
        }
    else if(playerSelect==='paper'){
        if(compSelect==='rock')
        console.log('You Win ! Paper beaats Rock');
        else if(compSelect==='scissor')
        console.log("You lose! Scissor beaats paper");
        }
    else if(playerSelect==='scissor'){
        if(compSelect==='paper')
        console.log('You win! Scissor beats Paper');
        else if(compSelect==='rock')
        console.log('You lose! Rock beats scissor');
    } 
 }
 // rounds to be played
 function playRound(){
     const rounds = 5;
     const compScore=0;
     const playerScore=0;
     console.log('Best of five game');
     for(i=0; i<rounds; i++){
        Gameplay();
     }

 }