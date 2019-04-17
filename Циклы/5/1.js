var out = document.getElementById("out");
var i;
f1();

function f1(){
    for (i=-4; i<=100; i=i+2){
        out.innerHTML += i + "<br>";
    }
}