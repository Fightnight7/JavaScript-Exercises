document.getElementById("check").onclick = f1;
var out1 = document.getElementById("out1");
var out2 = document.getElementById("out2");

function f1(){
    var age = 2019 - document.getElementById("year").value;
    out1.innerHTML = age;
    if (age >= 16 && age <120){
        out2.innerHTML = "Welcome!"
    }
    else if (age >=120){
        out2.innerHTML = "Too old!"
    }
    else {
        out2.innerHTML = "Access denied."
    }
}