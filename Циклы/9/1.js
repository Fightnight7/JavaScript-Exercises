var out = document.getElementById("out");

f1();
function f1(){
    var i=1;
    var x=1;
    while (i <= 50){
        x = x * i;
        i++;
    }
    out.innerHTML = x;
}