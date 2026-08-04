// User guess game
//let guessnumber=Math.floor(Math.random()*10)+1;
let guesnumber=7;
let user=0;
while(user!==guesnumber){
    user=Number(prompt("enter number to guess"));
    if(user<guesnumber){
        alert("big number")

    }
    else if(user>guesnumber){
        alert("small number")
    }
    else{
        alert("Perfect match")
    }
}