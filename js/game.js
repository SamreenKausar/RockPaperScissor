// console.log("hello World");
// global variables
const values = ['Rock', 'Paper', 'Scissor'];
//function generating ROCK/PAPER/SCISSOR randomly
function computerPlay (){
    const random = Math.floor(Math.random()*3);
    console.log(values[random]);
}