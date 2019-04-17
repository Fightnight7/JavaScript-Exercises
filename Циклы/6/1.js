var out = document.getElementById("out");
var i;
f1();
function f1(){
    for (i=1; i<=9; i++){
        out.innerHTML += i * 7 + "<br>";
    }
}