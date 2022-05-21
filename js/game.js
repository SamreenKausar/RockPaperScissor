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
 function Gameplay(){
     const playerSelect = playerSelection().toUpperCase();
     const compSelect = computerSelection().toUpperCase();
     console.log( "Player selected :",playerSelect);
     console.log("Computer Selected :", compSelect);

     
 }