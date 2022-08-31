

let outputScreen = document.getElementById("output-screen");

function display(number){
    outputScreen.value += number; 
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("invalid")
    }
}

function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}