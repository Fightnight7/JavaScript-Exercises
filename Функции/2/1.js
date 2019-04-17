document.getElementById("shadow").onclick = f1;
var img1 = document.getElementsByTagName("img");
console.log (img1);

function f1 (){
    for (var i=0; i<img1.length; i++){
    img1[i].style.boxShadow = "10px 10px 8px #888888";
        }
}