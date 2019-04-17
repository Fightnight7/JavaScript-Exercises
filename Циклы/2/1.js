var out = document.getElementById("out");

f1();
function f1(){
    for (var i=4; i <=13 ; i=i+3){
        out.innerHTML += i + "<br>";
    }
}