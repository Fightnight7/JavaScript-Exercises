var out = document.getElementById("out");
var i;

f1();
function f1(){
    for (i=1000; i<=2000; i++){
  
        out.innerHTML += "&#" + i + "<br>";
    }

    
}