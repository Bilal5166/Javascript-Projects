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

//Print table of any Number
function Userinput(){
    let a=document.getElementById("inputuser").value;
    document.getElementById("table").innerHTML=a;
    let i=1;
    while(i<=10){
        if(a<=0){
            alert("Please enter num greater then 0");

        }
        document.getElementById("tableprint").innerHTML+=`${a} * ${i} = ${a * i} <br>`;
        i++;
    }


}

