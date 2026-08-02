
 let count=0;
function update(){
    
    document.getElementById("counter").innerHTML=count;
    let counterElement = document.getElementById("counter");
    counterElement.innerHTML = count;

    // Condition ko '>= 0' ke bajaye '> 0' karein
    if (count > 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black"; // Reset / 0 hone par color normal ho jaye
    }
}
function increment(){
    
    count++;
    update();
}
function reset(){
    count=0;
    update();
}
function decrement(){
    if(count==0){
        alert("Counter cannot less than 0");
    }
    else{
    count--;
    update();
    }
    
}