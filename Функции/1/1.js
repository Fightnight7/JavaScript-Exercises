document.getElementById("out").onclick = f1;
var p1 = document.getElementsByTagName("p");
//var ppp = document.getElementById("ppp");
//console.log(p1);
//f1 ();
//var p2 = p1.length;

function f1(){
    for (var i=0; i<p1.length; i++){
        p1[i].style.background = "red";
        console.log(i);
    }
    //p2.style.background = "red";
}

//function f2(){
//    p1[0].style.background = "red";
//    p1[1].style.background = "red";
//    p1[2].style.background = "red";
//}