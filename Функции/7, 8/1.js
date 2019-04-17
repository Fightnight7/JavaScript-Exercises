document.getElementById("check").onclick = f1;
var out = document.getElementById("out");

function f1(){
    var num1 = document.getElementById("num1").value;
    if (num1 >= 16){
        out.innerHTML = "Welcome!";
    } 
    else if (num1 < 0){
        out.innerHTML = "Come when you will born";
    }
    else if (num1 == "undefined" || num1 == ""){
        out.innerHTML = "Type your age!";
    }
    else {
        out.innerHTML = "Too young!";
    }
    
}