var out = document.getElementById("out");
var i;
year ();
function year(){
    for (i=1983; i<=2017; i++){
        out.innerHTML += "Год " + i + "<br>";
    }
}