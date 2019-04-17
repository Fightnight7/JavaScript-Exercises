var out = document.getElementById("out");


f1 ();
function f1(){
    var i=0;
    var x =0;
    while (i <=100 ) {
        x = x + i;
        i++;
    }
   out.innerHTML += x + "<br>";
}
