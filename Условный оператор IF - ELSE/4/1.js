document.getElementById("check").onclick = f1;
var out = document.getElementById("out");

var m1 = ["ivan", "alex", "petr"];
var m2 = [334455, 777, "b5678"];

function f1 (){
    var x = document.getElementById("login").value;
    var y = document.getElementById("password").value;
    if (x == m1[0] && y == m2[0]){
        out.innerHTML = "Welcome!";
    }
    else if (x == m1[1] && y == m2[1]){
        out.innerHTML = "Welcome!";
    }
    else if (x == m1[2] && y == m2[2]){
         out.innerHTML = "Welcome!";
    }
    else {
        out.innerHTML = "Login or password - not correct";
    }
}