// console.log("hello World");
//function generating ROCK/PAPER/SCISSOR randomly
function computerPlay (){
    const values = ['Rock', 'Paper', 'Scissor'];
    const random = Math.floor(Math.random()*3);
    console.log(values[random]);
}