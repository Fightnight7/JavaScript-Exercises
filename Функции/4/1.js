var press1 = document.getElementById("press1").onclick = f1;
var press2 = document.getElementById("press2").onclick = f2;
var out1 = document.getElementById("out1"); 
var out2 = document.getElementById("out2"); 
var x = 0;
var y = 0;
function f1 (){
    out1.innerHTML = (x+1);
    x++;
}
function f2 (){
    out2.innerHTML = (y+1);
    y++;
}