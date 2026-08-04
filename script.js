
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

